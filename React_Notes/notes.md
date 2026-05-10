<!-- !node_modules -->

=> node_modules is a folder that automatically create by npm installs.
=> it contains npm packages. like axios, express,

<!-- !public  -->

=> Folder for static files (like images,.svg, facicon) that are served as-is.

<!-- !.gitignore    -->

=> File that tells Git which files/folders to ignore (e.g., node_modules).

<!-- !eslint.config.js -->

=> eslint.config.js is the configuration file for ESLint - a popular tool that analyzes your JavaScript/typeScript code for errors, bugs and style issues.

=> eslint.config.js tells ESLint how to check your code and what rules to follow.

<!-- !Package.json -->

=> it is the most important file in any JavaScript/Node.js project.
=> It acts like the identity card of your project.

<!-- what is contains : -->

->project name,version,description
-> all dependencies (packages ) your project needs
-> Scripts(like npm run dev, npm run build)
->Author, license etc.

<!-- !package-lock.json -->
<!-- => it is an auto-generated file created by npm. -->

=> it records the version of every package and sub-package installed.

why it exist:
-> to ensure everyone on the team gets the same exact version of packages.

<!-- !README.md -->

=> A markdown file that serves as the documentatoin for your project.

<!-- !vite.config.js -->

=> Configuration file for Vite (build tool & dev server).

<!-- !Bundler -->

=> available the file or folder one folder to another folder.
=> tree shaking - it removes the unused file and folder.

<!--
web pack (full configuration)
parscel (persoal)
vite (ligthing fast, less configuration) -->

<!-- !what is JSX?  What are the rules to write JSX ? **    -->

1.  JSX stand for javascript XML.
2.  It is a syntax extension for JavaScript that allows you to write hTML-like code inside JavaScript files.
3.  it was introdues by Facebook(Meta) for React.

<!-- !rules  -->

1. Return Only one Root Element.
2. All Tags (including Self-Closing Tags) Must Be Properly Closed.
3. Use CamelCase for Attributes.
4. JavaScript Expressions in {}.
5. To write comment in JSX usse {/_ /_}
6. Don't use if-else directly indide JSX instead use ternay or logical operator or map,filter,reduce etc.
7. Use className instread of class.
8. Use htmlFor instead of for in label tag.

<!-- !What is a component in React ?  Types of component ?   -->

=> A component in React is a reusable (self-contained) piece of code that returns some piece of JSX.

-> It is of 2 types :

1. Class Based compoent (CBC)
   i) A class component is a javascript class that extends React.Component.
   kk) It has render() method to return JSX.
   iii) It was the traditional way of writing React compoents before 2019.

2. Function Based Component (FBC)
   i) A function based component is a simple javascript function which returns some piece of jsx.
   ii) It is now the recommended and most popular way to write components in modern React.

<!-- !What is React.Fragment and Empty Fragment definition in 2 lines. -->

\*> React.Fragment (<React.Fragment>) : A wrapper component that lets you group multiple elements without adding an extra DOM node to the HTML output.

\*> Empty Fragmrnt (<>...</>) : A shorthand syntac for React.Fragment that does the same thing - groups elements without extra DOM nodes - but doesn't support the key prop.

Note :- We can not write id and clasName attrubut in both fragment.

<!-- !compoent composition / composite components -->

=> Component compositoin is the practice of calling one component to another component

<!-- !Props -->

=> props are a mechanism used to pass data from one component to another, typpically in a unidiractional (top-down) flow from parent to child.

//parent passes props

<Greeting name="Aline" age={25}/>

//child receives and used them function Freeting()

<!-- !Why we use Props  or characteristics of props ? -->

Characteristics

->immutable: a child component cannot modify its own props. 
->Unidireational - data flows only from parent -> child
->Destructured - commonly destructured intge funciton signature for cleaner code.

<!-- usecse -->

->Pass data - send data from parent component to child component.
->Reusability - Same component can be used multiple times with differetn data
-> Dynamic content -component show different content ased on props received
->Avoid Repetition :Write the component once, reuse it anywher
->Communication - The only way for a parent to talk to a child component.

<!-- !What is default Props.? -->

=> Default props in REact allow you to define fallback values for a comoponent properies.(props)
example:

       function Greeting({name="guest", age=18}){

          return(

          <h1>Hello, {name} !You are {age} years old. </h1>
          )
       }

       <Greeting/>
       Component call without passing props.

  <!-- !What is children prop.? -->
 1. children prop is a special, built-in property that allows you to pass content between the opening and closing tags of a component.
 2. Anything placed inside a component's tags is automatically passed to that component as props. children.
3. Children can be strings, numbers, JSX elemnet, arrays, or even funciotns.

       ex:-
           function Card({children}){
            return <div className="card"> {children}</div>
           }

           //now you can pu anything inside card component

           <Card>
           <h2>Title</h2>
           <p>Description here </p>
           </Card>

<!-- ! What is Props Driling ? vvi -->
=>Prop Drilling is the process of passing data (Props) throught multiple layers of components to reach a deeply nested child that needs it, even if the intermediate components do not used that data.

NOTE : To avoid props drilling we use context API, React State Managemen   3
Ex: 
<!-- Data starts here in Parent -->






<!-- !What is render Prop ? -->
1. Render Prop is when you pass a function as a prop to a component, and that component calls the function to render something.

ex:-

//component accepts a funciotn as a prop

function Greet({render}) {
   return <div> {render ("alice")} </div>
}

passing a function as prop
<Greet render={()}> 

<!-- !State -->
=>
=> State is data that can change over time in your component. it is used to store and manage dynamic information that affects how your component renders and behaves.

=> state is a built-in object used to store data or information about a component that can change over time. When the state changes, React automatically re-renders the component to update the UI.

<!--  !Hooks in react  -->
=> Hooks are special functions that let you use React features like state, lifecycle methods, and more inside functional components.

=> Hooks were introduced in React 16.8 to allow functional components to have state and side effects, which were previously only possible in class components.
