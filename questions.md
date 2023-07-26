1. What is the difference between Component and PureComponent? Give
an example where it might break my app.
ANS:Component-In React Component is simple a JavaScript Function at the end.
              Everything is a Component in React
              In React Component is of two type- Functional Component-New Way if writing code
                                                 Class Component-Old way
             Functional Component is nothing but a javascript function which means that it is a normal
             JavaScript Function which return some piece of React Element like-here JSX
             Eg: const App=()=>{
                           return <h1>Functional Component</h1>  
                               }
             Class Component also are just normal JavaScript 
             It was less maintainlable and have more code and now it is no longer in use
             Eg:class App extend from React.Component{
                              render(){
                     return <h1>CLass COmponent </h1>}}
                        export default App;
   Pure Component-Pure components are the components that does not re-render again and again when the same value of        props and state has been updated
It helps in optimising and improving the performance of App.

Pure Component might be break-if we use PureComponent,it works on the basis of shallow comparison of the state and props to determine whether to re-render or not. A shallow copy compare means it only checks if the references to the objects are the same, not their value.It might unexpected behavior when we modify nested data directly in the state.Then it might break our Application



2 Context + ShouldComponentUpdate might be dangerous. Why is that?
 ANS-Yes when we use Context and shouldComponentUpdate it might have some issues because,context is a way to pass the data globally or component tree without passing props to every nested child level and when we use shouldComponent it affect the results
It might not trigger re-render and data is not coming properly 
or it might affect the result which we want it will not getting appropriately

3-Describe 3 ways to pass information from a component to its PARENT.
ANS: 1-Using Context-we can pass the data globally instead of passing props at each level
     2-Using Callback-It is also a way to pass the data from child to parent 
     3-Using Lifting State Up-It means that we can lift the state up to that common component


4- Give 2 ways to prevent components from re-rendering.
ANS- 1-React Memo-It helps in optimising and improving performance of application and it prevent from rerendering,it will help when props change then only it rerender otherwise not
For Eg:   const App=React.memo(({item})=>{
console.log("App is Trigger");
return <div>{item}</div>});

   <App item="React Memo" />

    2-useMemo-It memoize the value and avoid in re-render if the dependicies is same
  For Eg: const App=((item)=>{
const data=useMemo(()=>{
console.log("data trigger");
returb data[0];
},[data]);
console.log("App Trigger");
return <div>{data}</div>

<App item="useMemo" />

5-What is a fragment and why do we need it? Give an example where it might
break my app.
ANS: It is a component which group a list of child without adding extra Node to the DOM.

const App=()=>{
<React.Fragment>

<React.Fragment/>
}
or <></>shorthand syntax of Fragment ,we can use any both are same
It is necesary when we need to return multiple element from a component without adding unneccessary element in the DOM
Fragment might break-when we render a any item or list from the child in parent using map,filter,reduce and if parent component data depend on child data in order to do any implementation it might lose data or may not behave what we expect then in that case it might be break 

6-Give 3 examples of the HOC pattern.
-1-With Loader-Display a loading spinner while waiting for data to load
   For Eg: WithLoading=(WrapCom)=>{
const loading=({loading})=>{
if(loading){<div>Loading....</div> else return <div>{data}</div>

const dataCompoent=(data)=>"
return <div>{data}</div>;

const compwithloader=withloading(datacomponent);


2-With Logger -It logs the props and state of  a component when it is rendered or updated
  For Eg: const withlog=(wrapCom)=>{
   useEffect(()=>{
    console.log("compoent render");
    console.log("props",props)
},[props]);
return <wrapCom {props} />
};
return logComp;


const app=()=>{
return <div>App</div>
}
const compwithlog=withlog(app)

3-WithAuth-It help us in authentication functionality
   For Eg:  const withAuth=(wrapComp)=>{
const auth=true;
const authcomp=(props)=>{
if(auth) return <wrapComp {props}/>
else <logout />


return authComp

};
const app=()=>{
return <div>Auth</div>
}
export default withAuth(app);

7-What's the difference in handling exceptions in promises, callbacks
and async...await?
ANS:  Promise-It use .then method to handle cases.It return true when resolve otherwise reject with msg accordingly and it comes inside catch
Eg: const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 300);
});
promise.then(value=>console.log(value));
Callback-It is pass as a argument to other function and it get executed when that function completed and handle error with the callack function as an argument
Eg: const num=(n)=>{
n();
}
Async/Await: We use async to do asynchronous opertation on function and it will wait using wait to pause the function until data is coming or resolve
   Eg: const data=async(item)
        {  
            fetch("....")
            .then(data=>console.log(data))
           const response=await data.json()
}
8-How many arguments does setState take and why is it async.
ANS:It takes two argument one is object and function or it may use callback function too
setState is asynchronous in nature.It helps in rerender and avoiding unnecessary re rendering 
It provude multiple update together before rerendering which make our app optimising and performance increase
  Eg: const [item,,setItem]=useState("");



9-List the steps needed to migrate a Class to Function Component.
ANS: First we need to check the state and props we used inside classComponent.
So we need to use SetState in order to migrate
Then we have to check lifecycle we used in class component so accordingly we will use useEffect 
In order to migrate we will use arrow function and removing render and constructor inside of tht
Then we pass the data as a props inside functional Component
We need to remove the code which is not used such as Super,constructor ,render and checking handle event also
By tbis way we can migrate a class to functional component.

10-List a few ways styles can be used with components.
ANS:We have many ways

-Inline Css
  <div style={{color:"red",padding:"20px"/>
-External CSS
  We will import inside where we want to style our component
  For Eg: style.css 
            .container{
               padding:"10px";
}
app component
import './style.css";
<div className="container>data</div>

-Using CSS module
  Eg: .container {    style.module.css
   color:red;}

App Component
import style from './styles.module.css";
<div  className={style.container}>App</div>

any many other ways also-Bootstrap,Materil Ui,TailWind Css,JS Libraries


11. How to render an HTML string coming from the server.
ANS: We can use "dangerouslySetInnerHTML" as a props 
   For Eg: <div dangerouslySetInnerHTML={{__html:htmlString}} />
It provide security from XSS(Cross site script attack) 
 In the given assignment i can use this also but on that time i use different approaches



