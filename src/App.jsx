
import './App.css'

import Home from './home'
import Blogs from './blogs'
import Actor from './actor'
import Mobile from './mobile'
import BatsMan from './batsman'
import Users from './users'
import Friends from './friends'
import Posts from './posts'

import { Suspense } from 'react'

const Player = ({name, runs = 0}) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Runs: {runs} </p>
    </div>
  )
}

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
//                   .then(res => res.json());
const fetchFriends = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}

const fetchPosts = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json();
}

function App() {
  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();
  const actors = ["Sabana", "Alamgir", "Slanman khan", "Rittik roshon"]
  const mobiles = [
    {
      name: "iPhone 15 Pro",
      brand: "Apple",
      price: 999,
      color: "Titanium Blue"
    },
    {
      name: "Galaxy S23 Ultra",
      brand: "Samsung",
      price: 1199,
      color: "Phantom Black"
    },
    {
      name: "Pixel 8 Pro",
      brand: "Google",
      price: 999,
      color: "Obsidian"
    },
    {
      name: "OnePlus 11",
      brand: "OnePlus",
      price: 699,
      color: "Eternal Green"
    },
    {
      name: "Xiaomi 13 Pro",
      brand: "Xiaomi",
      price: 799,
      color: "Ceramic White"
    }
  ];
  
  const handleClick = () => {
    alert("Clicked");
  }
  const handleClick2 = (num) => {
    const result = num + 10;
    alert(result)
  }
  return (
    <>
  
      <h1>Vite + React</h1>
      <Suspense fallback = {<h3>Posts are loading ..... </h3>}>
        <Posts postsPromise = {postsPromise}></Posts>
      </Suspense>
      
     
     <Suspense fallback = {<h3>Friends are coming for treats ....</h3>}>
     <Friends friendsPromise = {friendsPromise}></Friends>
     
     </Suspense>



      {/* <Suspense fallback = {<h3>Loading....</h3>}>
      <Users fetchUsers = {fetchUsers}></Users>
      </Suspense> */}
      
      <BatsMan></BatsMan>
      <button onClick={handleClick}>Click me</button>
      {/* <button onClick={handleClick2(20)}>Click me</button> */}
        {/* {
          mobiles.map(mobile => <Mobile key={mobile.id} mobile={mobile} ></Mobile>
          )
        }

      {
        actors.map(actor => <Actor actor={actor}></Actor>
        )
      } */}

      {/* <Player name="Pinki Biswas" runs="2000"></Player>
      <Player name="Rani Biswas" runs="1000"></Player>
      <Player name="Likhon Biswas"></Player> */}

      {/* <Home task="Learn React" isDone={true} time="4 weeks"></Home>
      <Home task="Learn Js" isDone={false}></Home>
      <Home task="Learn Node" isDone={false}></Home> */}

      
    </>
  )
}

export default App
