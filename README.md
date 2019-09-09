# Includes-With-Array

This is Function which enables you to Array.prototype.includes with array

## Installation

This module is available as an npm package.

```Console
// with npm
npm install includes-with-array

// with yarn
yarn add includes-with-array
```

## Usage

Here is a quick example to get you started, it's all you need:

```TypeScript
import Includes from "includes-with-array";

console.log(Includes([1,2,3,4,5],[1,3,6]))  
// {resultBool:true,resultMatch:[1,3]}

console.log(Includes([1,2,3,4,5],[6,7]))  
// {resultBool:false,resultMatch:[]}

console.log(Includes(["cat","dog"],[1,"cat","fish"]))  
// {resultBool:true,resultMatch:["cat"]}
```

If you want to know in detail, Please check API set below.

## API

function(targetArg,searchArg):{  
    resultBool:boolean,  
    resultMatch:(string | number | boolean)[]  
}

| Arg | type | detail |
|:--------:|:----:|:------:|
|targetArg|(string \| number \| boolean)[]|target array|
|searchArg|(string \| number \| boolean)[]|search array|
|resultBool|boolean|result|
|resultMatch|(string \| number \| boolean)[]|show what search arg matched|
