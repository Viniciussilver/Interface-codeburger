const formatDate = date => {
  return new Date(date).toLocaleDateString('pt-BR', {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default formatDate

// <h2> 💻 Projeto </h2>
// <p>CodeBurger é um sistema para lanchonete, que permite aos usuários se cadastrar, fazer pedidos e adicionar ao carrinho.Tambem é possivel fazer login como adiministrador e ver os pedidos que foram realizados, ver a lista de produtos, adicionar e editar novos produtos.Todos os usuários cadastrados, os produtos e os pedidos realizados, ficam gravados no banco de dados. Para ver a api <a href="https://github.com/Viniciussilver/Back-end-codeBurger">clique aqui</a>.</p>
//  <h2> 📸 Demo</h2>
// <img src="./src/assets/CodeBurger-demo1.gif">
// <img src="./src/assets/CodeBurger-demo2.gif">
//  <h2>🚀 Tecnologias</h2>

// * [React.js](https://pt-br.reactjs.org/)
// * [Node.js](https://nodejs.org/en/)
// * [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
// * [Styled-components](https://styled-components.com/)
// * [Material UI](https://mui.com/pt/)
// * [React Hook Form](https://react-hook-form.com/)
// * [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
// * [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
// * [React Elastic Carousel](https://sag1v.github.io/react-elastic-carousel/)
// * [Axios](https://www.npmjs.com/package/axios)
// * [yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)
// * [Yup](https://www.npmjs.com/package/yup)
// * [Prettier](https://prettier.io/)
// * [ESLint](https://eslint.org/)
