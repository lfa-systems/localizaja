import './Principal.css';
import React, { useState, useEffect } from 'react';

// Dados de exemplo para simular a resposta de uma API.
const initialEstablishments = [
    {
        id: 1,
        name: "Restaurante Sabor Caseiro",
        address: "Rua das Flores, 123, Centro, São Paulo",
        imageUrl: "https://placehold.co/800x600/2a9d8f/ffffff?text=Restaurante+Sabor+Caseiro",
        socials: {
            facebook: "https://www.facebook.com/restaurantesaborcaseiro",
            instagram: "https://www.instagram.com/saborcaseiro",
            whatsapp: "https://wa.me/5511999999999"
        }
    },
    {
        id: 2,
        name: "Padaria Delícia",
        address: "Avenida Principal, 456, Jardim Botânico, Rio de Janeiro",
        imageUrl: "https://placehold.co/800x600/e9c46a/264653?text=Padaria+Delicia",
        socials: {
            facebook: "https://www.facebook.com/padariadelicia",
            instagram: "https://www.instagram.com/padariadelicia"
        }
    },
    {
        id: 3,
        name: "Farmácia Boa Saúde",
        address: "Praça da Sé, 789, Sé, Belo Horizonte",
        imageUrl: "https://placehold.co/800x600/f4a261/264653?text=Farmacia+Boa+Saude",
        socials: {
            facebook: "https://www.facebook.com/farmaciaboasaude",
            whatsapp: "https://wa.me/5531888888888"
        }
    },
    {
        id: 4,
        name: "Loja de Roupas Chic",
        address: "Rua da Moda, 101, Bairro Alto, Lisboa",
        imageUrl: "https://placehold.co/800x600/e76f51/264653?text=Loja+de+Roupas+Chic",
        socials: {
            instagram: "https://www.instagram.com/lojaroupaschic"
        }
    }
];

// Componente para um ícone de rede social, usando SVG inline.
const SocialIcon = ({ href, svgPath, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
        aria-label={label}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
        >
            <path d={svgPath} />
        </svg>
    </a>
);

// Componente principal da aplicação.
export default function Principal() {
    // Estado para armazenar a lista de estabelecimentos.
    const [establishments, setEstablishments] = useState([]);

    // Estado para os valores dos campos de filtro.
    const [filters, setFilters] = useState({
        country: '',
        state: '',
        city: '',
        neighborhood: '',
        establishment: ''
    });

    // Efeito para carregar os dados iniciais.
    useEffect(() => {
        setEstablishments(initialEstablishments);
    }, []);

    // Lida com a mudança nos campos de input.
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [id]: value
        }));
    };

    // Lógica de pesquisa (ainda não implementada).
    const handleSearch = () => {
        // Futura lógica de filtragem da lista.
        console.log("Pesquisando com os filtros:", filters);
    };

    return (

        <div className="container grid-container">

            {/* Header */}
            <header className="cabecalho-card">

                <h1>
                    Localiza Já
                </h1>

            </header>

            {/* Conteúdo principal */}
            <main className="filtro-card">
                <div>
                    <select id="pais" name="pais" className="selecao" >
                        <option value="BRA">Brasil</option>
                    </select>
                </div>
                <div>
                    <select id="estado" name="estado" className="selecao" >
                        <option value="">Selecione um estado</option>
                        <option value="PB">Paraíba</option>
                        <option value="PE">Pernambuco</option>
                        <option value="SP">São Paulo</option>
                        <option value="RN">Rio Grande do Norte</option>
                    </select>
                </div>
                <div>
                    <select id="cidade" name="cidade" className="selecao" >
                        <option value="">Selecione uma Cidade</option>
                        <option value="CG">Campina Grande</option>
                        <option value="SB">Serra Branca</option>
                        <option value="QM">Queimadas</option>
                        <option value="AR">Aroeiras</option>
                    </select>
                </div>
                <div>
                    <select id="bairro" name="bairro" className="selecao" >
                        <option value="">Selecione um Bairro</option>
                        <option value="CC">Centro</option>
                        <option value="CT">Catolé</option>
                        <option value="PV">Pedro Velho</option>
                        <option value="ZT">Zezinho Tranquilino</option>
                    </select>
                </div>
                <div>
                    <select id="atividade" name="atividade" className="selecao" >
                        <option value="">O que procura? </option>
                        <option value="FM">Farmacia</option>
                        <option value="SM">Supermercado</option>
                        <option value="CO">Costureira</option>
                        <option value="PD">Pedreiro</option>
                    </select>
                </div>

            </main>

            {/* Estabelecimento */}
            <div className="resultado-card">
                <label>
                    Resultado
                </label>
                <div className='lista-resultado'>
                    <div className='item-card'>
                        <div className='establishment-card'>
                            <img  src='https://scontent.fcpv10-1.fna.fbcdn.net/v/t39.30808-6/347797340_934903754421310_6252944629622584620_n.png?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEKZMMeK57nPK8L27LuAsIVVJB9OifkYmRUkH06J-RiZKdDasT3KbrfoxX2ksVRYQI5IEa9eVVwolSO3IxitkMw&_nc_ohc=X_1wPlxJ87gQ7kNvwE25gQ1&_nc_oc=Adnbbm2KiJEepjeDyNSPRNMSzNYzW2QjORb3rYjY4nmjB924FkAF8ylDjMi6AGGcges&_nc_zt=23&_nc_ht=scontent.fcpv10-1.fna&_nc_gid=D_vW13TkCqdaYsEndQOIlA&oh=00_AfXbQY2qthCS055X30k5zfjCjJ5nBkj3qUKfWD1ok2Sa7A&oe=68B25B89'/></div>
                        <div>
                        <h3 className='nomeEstabelecimento'>Farmácia Bom Preço</h3>
                        <p className='enderecoEstabelecimento'>R. Antônio Gonçalves, 20 - Aroeiras, PB, 58489-000</p>

                        </div>
                    </div>
                    <div className='item-card'>
                        Empresa 2
                    </div>
                    <div className='item-card'>
                        Empresa 3
                    </div>
                    <div className='item-card'>
                        Empresa 4
                    </div>
                    <div className='item-card'>
                        Empresa 5
                    </div>
                    <div className='item-card'>
                        Empresa 6
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="shadow-lg p-6 rounded-md bg-white text-gray-900">
                Footer
            </footer>
        </div>

    );
}
