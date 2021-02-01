const express = require('express');
const cors = require('cors');

// import express from 'express';
// import cors from 'cors';

// import isEmptyObject from './utils/isEmptyObject.js'

let todos = [
  { id: 3, content: 'Javascript', completed: false}, 
  { id: 2, content: 'CSS', completed: true},
  { id: 1, content: 'HTML', completed: false}
];

const app = express();

app.use(cors());
app.use(express.json());

// 커스텀 리퀘스트
app.get('/todos', (req, res) => {
  res.send(todos);
});
app.get('/todos/:id', (req, res) => {
  res.send(todos.filter(todo => todo.id === +req.params.id));
});
app.post('/todos', (req, res) => {
  // do someting
  
  // 페이로드가 없는 경우
  const newTodo = req.body;
  
  // if (isEmptyObject(newTodo)) {
  //   return res.status(400).send({
  //     error: true,
  //     reason: '페이로드가 존재하지 않습니다.'
  //   });
  // }
  
  // 아이디가 중복된 경우
  const idList = todos.map(todo => todo.id)
  const newTodoId = +req.body.id;
  if (idList.includes(newTodoId)) {
    res.status(400).send({
      error: true,
      reason: `${newTodoId}는 이미 있는 id입니다.`
    })
  } else {
    todos = [req.body, ...todos];
    res.send(todos)
  }
})
app.patch('/todos/:id', (req, res) => {
  const id = +req.params.id;
  const completed = req.body;

  todos = todos.map(todo => todo.id === id ? { ...todo, ...completed } : todo) 
  res.send(todos);
})
app.patch('/todos', (req, res) => {
  const completed = req.body;
  todos = todos.map(todo => ({ ...todo, ...completed }))
  res.send(todos);
})
app.delete('/todos/completed', (req, res) => {
  todos = todos.filter(todo => !todo.completed)
  res.send(todos);
})
app.delete('/todos/:id', (req, res) => {
  const id = +req.params.id;

  todos = todos.filter(todo => todo.id !== id);
  res.send(todos);
})

// listen
app.listen('7000', () => {
  console.log('Server is listening on http://localhost:7000');
})