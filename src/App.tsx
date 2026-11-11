import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer";
import ListaProdutos from "./pages/listaProdutos/ListaProdutos";
import Home from "./pages/home/Home";
import DetProduto from "./pages/DetProduto/detProduto";
import Login from "./pages/Login/login";
import AdmProdutos from "./pages/AdmProdutos/admprod";
import Header from "./components/Header/Header";



export default function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Produtos" element={<ListaProdutos />} />
                <Route path="/detalheProduto" element={<DetProduto />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/admProdutos" element={<AdmProdutos/>}/>
                <Route path="*" element={
                    <img className="gifuau" src="https://cdn.dribbble.com/userupload/25439422/file/original-af9c309401b13edcd50861b6196ac9ee.gif" alt="imagem de não encontrado."/>}/>
            </Routes>
            <Footer />
        </>
    )

}