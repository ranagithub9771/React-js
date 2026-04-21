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
5. To write comment in JSX usse {/* /*}
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
