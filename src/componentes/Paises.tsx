import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';
import { apiBaseUrl } from './UrlsApi';


// O componente principal que busca e renderiza o seletor de países.
const Paises = () => {
    // Estados para armazenar a lista de países, o estado de carregamento e erros.
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('');

    // O useEffect é usado para realizar a chamada à API quando o componente é montado.
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(apiBaseUrl.Paises)
                // Verifica se a resposta foi bem-sucedida.
                if (!response.ok) {
                    throw new Error(`Erro na rede: ${response.status}`);
                }
                const data = await response.json();
                // Atualiza o estado com a lista de países e o estado de carregamento.
                // --- O CÓDIGO AQUI PARA TRADUZIR OS DADOS DA API PARA A INTERFACE ---
                // Aqui, os dados da API (que são diferentes da interface) são mapeados
                // para um novo formato que se encaixa na sua interface 'Pais'.
                const formattedData = data.map((item) => ({
                        id: item.id['M49'],
                        nome: item.nome
                    }));

                setCountries(formattedData);
            } catch (e) {
                // Se houver um erro na requisição, atualiza o estado de erro.
                setError(e.mensagem);
            } finally {
                // O carregamento é finalizado, independentemente do sucesso ou falha.
                setLoading(false);
            }
        };

        fetchCountries();
    }, []); // O array vazio [] garante que o efeito rode apenas uma vez, na montagem do componente.

    // Caso tenha erro no carregamento da API
    useEffect(() => {
        if (error) {
            toast.error('Erro ao carregar a lista de países.\nTente novamente mais tarde.');
        }
    }, [error]);

    // Manipulador de mudança para o select.
    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        console.log(`País selecionado: ${event.target.value}`);
    };

    // Renderização condicional baseada no estado.
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Selecione um País
                </h2>

                {/* Exibe mensagem de carregamento enquanto a API busca os dados */}
                {loading && (
                    <div className="text-center text-gray-500">
                        Carregando lista de países...
                    </div>
                )}

                {/* Exibe mensagem de erro se a requisição falhar */}
                {error && (
                    <div className="text-center text-red-500">
                        Erro ao carregar os dados.
                    </div>
                )}

                {/* Renderiza o seletor se os dados forem carregados com sucesso */}
                {!loading && !error && (
                    <div className="relative">
                        <select
                            className="block w-full px-4 py-3 appearance-none rounded-lg border border-gray-300 bg-white text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 cursor-pointer pr-10"
                            onChange={handleCountryChange}
                            value={selectedCountry}
                            aria-label="Selecione um país"
                        >
                            <option value="" disabled>Selecione...</option>
                            {countries.map((country) => (
                                // Mapeia a lista de países para criar as opções do seletor.
                                // A 'key' é fundamental para a performance do React e agora usa o código M49.
                                <option
                                    key={country.id}
                                    value={country.nome}
                                >
                                    {country.nome}
                                </option>
                            ))}
                        </select>
                        {/* Ícone de seta para baixo para indicar que é um seletor. */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                            <ChevronDown className="w-5 h-5" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Paises;
