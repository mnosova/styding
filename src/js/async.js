//import axios

//простой fetch get запрос с обработкой ошибки
function getUser() {
  fetch(`https://jsonplaceholder.typicode.com/users/${payload.id}`)
    .then((response) => {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      return user = response.json()
    }).then((user) => {
    console.log(`Меня зовут ${user.name}`);
    console.log(`Я живу на ${user.address.street}`);

  }).catch(error => console.log(error));

}

let payload = {
  method: 'post',
  id: 9,
  body: '?id=8'

};

//post запрос со сформированными данными в массиве
function getUser2() {
  fetch('http://httpbin.org/post', payload)
    .then(response => {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      return response = response.json();
    }).then(response => {
    console.log(response);

  }).catch(error => console.log(error));

}

options = {
  method: 'get'
};

//простой axios get запрос с обработкой ошибки
function getAxios() {
  axios(`https://jsonplaceholder.typicode.com/users/${payload.id}`, options)
    .then(response => {
      return data = response.data
    })
    .then(data => console.log(data.name)
      .catch(error => console.log(error))
    );

}

function postAxios() {
  axios.post('http://httpbin.org/post', payload)
    .then(response => console.log(response))
    .catch(error => console.log(error))

}


//использование асинхронной функции в запросе
// суть в том чтобы дождаться получения данных
async function getPerson(id) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let data = await response.json();

    return data;
  } catch (error) {

    throw new Error('error in getuser ')
  }


}

async function getPost(userId) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    let post = await response.json();

    return post;

  }
  catch (error) {
    throw new Error('error in getPost ')

  }


}

async function getComments(postId) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    let post = await response.json();

    return post;

  }
  catch (error) {
    throw new Error('error in getComments ')

  }


}

//цепочка асинхронных вызовов, пока не получим одно не получим и другое
async function fetchAcyncResult() {
  try {
    let user = await getPerson(5);
    let userPost = await getPost(user.id);
    let userComment = await getComments(userPost[0].id);
    console.log(user);
    console.log(userPost);
    console.log(userComment);

  }
  catch (error) {
    console.log(error);

  }

}

const key = '3bcab38c01345ef3bbc4b3bd63cc517a';
let city = 'London';

//fetch работа с api
//формирование построки запроса
function getWeather() {
  function weatherRequest() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`, {
      method: 'GET'
    }).then(response => {
      if (response.status === 200) {
        return data = response.json()
      }
    }).then(data => {
      let temperature = Math.round(data.main.temp);
      console.log(`Температура в Лондоне ${temperature}\u2103 Время: ${new Date()}`);
    })
      .catch(error => console.log(error));


  }

  weatherRequest();
  setInterval(function () {
    weatherRequest();
  }, 60000);
}

//axios работа с api
//формирование построки запроса
const key2 = '6bfa8f72fd4dacbb8246f9847f323990aabdfbf140fe0b08022354cf7d45a325c4ba69a5b2b2f55285869';
const url = `https://api.vk.com/method/groups.getById?group_ids=19103050&fields=members_count&access_token=${key2}&v=5.27`;
axios.get(url)
  .then((res) => {
    console.log(res);
    const {members_count} = res.response[0];
    res.status(200).send({
      subscribers: members_count
    });
  })
  .catch((e) => {
    console.log(e);
  });

