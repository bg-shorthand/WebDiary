const express = require('express');
const cors = require('cors');

let diaries = [
  {
    id: '2021-01-10',
    title: '봉처리 바보',
    content: '내용'
  },
  {
    id: '2021-01-21',
    title: '장지혜',
    content: '내용'
  },
  {
    id: '2021-02-01',
    title: '한병국',
    content: '내용'
  },
  {
    id: '2021-02-02',
    title: '박혜쭌',
    content: '내용'
  },
  {
    id: '2021-02-03',
    title: '배근아',
    content: '내용'
  }
];

const app = express();

app.use(cors());
app.use(express.json());

// 커스텀 리퀘스트
app.get('/diaries', (_, res) => {
  res.send(diaries);
});
app.get('/diaries/:id', (req, res) => {
  res.send(diaries.filter(diary => diary.id === +req.params.id));
});
app.post('/diaries', (req, res) => {
  const newDiary = req.body;
    diaries = [newDiary, ...diaries];
    res.send(diaries)
})
app.patch('/diaries/:id', (req, res) => {
  const id = +req.params.id;
  const modifyDiary = req.body;
  diaries = diaries.map(diary => diary.id === id ? { ...diary, ...modifyDiary } : diary) 
  res.send(diaries);
})
app.delete('/diaries/completed', (_, res) => {
  diaries = diaries.filter(diary => !diary.completed)
  res.send(diaries);
})
app.delete('/diaries/:id', (req, res) => {
  const id = +req.params.id;
  diaries = diaries.filter(diary => diary.id !== id);
  res.send(diaries);
})

// listen
app.listen('7000', () => {
  console.log('Server is listening on http://localhost:7000');
})