# react4newbie

신입 엔지니어를 위한 react 가이드

## 들어가기 전에

앞으로 리액트(React)를 학습하게 될텐데, 그 전에 스스로가 어떤 상태인지 체크할 필요가 있습니다. 그 이유는 리액트는 자바스크립트 라이브러리이기 때문에 자바스크립트에 익숙하지 않은 상태에서 학습하게 된다면 리액트와 자바스크립트를 동시에 학습하는 느낌이 들어 금세 지칠 수 있기 때문입니다.

만약 자신의 자바스크립트 역량을 진단해보고 싶다면 [JavaScript 튜토리얼 살펴보기](https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript)를 통해 약 45분 정도의 시간을 써보시길 바랍니다.

만약 과거에 자바스크립트를 학습했지만, 최신(약 3년간)의 문법이 익숙하지 않은 분이라면 [Modern JavaScript in React Documentation](https://gist.github.com/gaearon/683e676101005de0add59e8bb345340c)을 통해 리액트에서 사용하는 최신의 문법을 살펴보시길 바랍니다.

만약 프론트엔드 엔지니어링에 대한 지식이 부족하다면, [Front-end Developer Handbook 2019](https://frontendmasters.com/books/front-end-handbook/2019)을 살펴보며 프론트엔드 기본기와 최신(2019년)의 트랜드를 살펴보시길 바랍니다.

## 리액트란

우리에게는 리액트를 포함한 여러 라이브러리를 사용할 때 명심해야 할 한 가지가 있습니다. 그것은 도구의 메커니즘을 이해하는 것인데, 리액트를 학습할 때도 마찬가지입니다. 리액트가 해결하고자 하는 문제가 무엇인지, 어떤 상황에서 사용해야 하는지, 어떻게 사용해야 하는지 등을 이해해야 결과적으로 우리가 원하는 상황에 맞게 도구를 선택할 수 있게 되기 때문입니다.

[What Is ReactJS and Why Should We Use ReactJS?](https://www.c-sharpcorner.com/article/what-and-why-reactjs/)를 읽어보면 리액트를 사용하는 이유는 다음과 같습니다.

* Simplicity
  > ReactJS is just simpler to grasp right away. The component-based approach, well-defined lifecycle, and use of just plain JavaScript make React very simple to learn, build a professional web (and mobile applications), and support it. React uses a special syntax called JSX which allows you to mix HTML with JavaScript. This is not a requirement; Developer can still write in plain JavaScript but JSX is much easier to use.
* Easy to learn
  > Anyone with a basic previous knowledge in programming can easily understand React while Angular and Ember are referred to as ‘Domain specific Language’, implying that it is difficult to learn them. For react you just need basic knowledge of CSS and HTML.
* Native Approach
  > React can be used to create mobile applications (React Native). And React is a diehard fan of reusability, meaning extensive code reusability is supported. So at the same time we can make IOS, Android and Web application.
* Data Binding
  > React uses one-way data binding and an application architecture called Flux controls the flow of data to components through one control point – the dispatcher. It's easier to debug self-contained components of large ReactJS apps.
* Performance
  > React does not offer any concept of a built-in container for dependency. You can use Browserify, Require JS, EcmaScript 6 modules which we can use via Babel, ReactJS-di to inject dependencies automatically.
* Testability
  > ReactJS applications are super easy to test. React views can be treated as functions of the state, so we can manipulate with state we pass to the ReactJS view and take a look at the output and triggered actions, events, functions, etc.

리액트는 웹 개발에 있어서 복잡한 웹 UI로 구성된 프론트엔드 어플리케이션을 용이하게 개발하고 관리하기 위해 등장했습니다. 지속적으로 변경되는 하나의 데이터가 있다고 할 때 그 데이터가 변경됨과 동시에 매번 웹의 UI를 변경해야 한다면 정말 끔찍할 것입니다. 리액트는 이런 상황에서 가장 유용하게 사용됩니다.

> 리액트는 시간에 따라 변화하는 데이터를 다루는 거대한 애플리케이션을 개발할 때 발생하는 문제를 해결합니다.
>
> 리액트를 통해 뷰를 예측한다는 개념이 생겼습니다. 선언적으로 뷰에 해당하는 함수(컴포넌트)를 만드는 것을 통해 사용자에게 어떤 화면이 보여질 것인지 미리 예측할 수 있습니다.
