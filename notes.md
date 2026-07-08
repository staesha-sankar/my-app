ctrl + ~ => open/hide the terminal

f2 rename

//useNavigate
useNavigate: use it when you want to change url programmatically
eg Payment yes or no -> if successful takes you to order page if not takes you to payment
No user interaction must do it automatically


navigate("about") - route
naviagte(-1) - go back
navigate (1) - goes forward

eg if you want to go 3 pages back navgiate(-3)


//useParams - gives object then you can destructure
Get a parameter from a url

path="/about":id



//Types of components
1. class
2. function -> less work to get the same result/ improve dx/ can only use hooks

life cycle of component
1. initialisation  - setup props and state
2. mounting - tree makes it visible to user (willMount-will run the code attached basically return statement - render JSX parts  - after mounting react will run didMount will run the fetch code (callback equivalent))
3. updation - props and state due to rerendering occuring. React checks should i update the component
4. unmounting - changing a page and condiitonal rendering

usEffect(callback), [] -> when mount is complete callback is called once
useEffect() -> callback called everytime
useEffect(),[dependency] -> you control when the call back is called