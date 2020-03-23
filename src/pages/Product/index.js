import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import api from '../../service/api'

// components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// style
import { Container } from './styles'

export default class Product extends Component {

  state = {
    products: [],
  }

  componentDidMount() {
    this.loadProducts()
  }

  async loadProducts() {
  
    try {
      const response = await api.get('/products')
      this.setState({ products: response.data })
      // this.setState({  })
    
    } catch (error) {
      if(error){
        window.location.href = '/login'
      }
    }
    
  }

  render() {
    return (
      <>
        <Header/>
        <Container>
          {
            this.state.products.map((product, key) => 
              <Link to={`/products/${product.id}`} key={key}>
                {product.name}
                <br/>
                <span>{product.description}</span>  
              </Link>
            )
          }
        </Container>
        <Footer/>
      </>
    );
  }
  
}


// export default function Product() {

//   const [ products, setProducts ] = useState('')

//   useEffect(() => {
//     loadProducts()
//   }, [])

//   async function loadProducts() {
//     try {
      
//       const response = await api.get('/products')
      
//       console.log(response.data)
//       setProducts(response.data)
//       console.log('bem aqui', products)

//     } catch (error) {
//       if(error){
//         // window.location.href = '/login'
//         console.log(error)
//       }
//     }
//   }

//   return (
//     <>
//       <Header/>
//         produto
//       <Footer/>
//     </>
//   );
// }
