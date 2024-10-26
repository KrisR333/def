document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const questionSuggestions = document.getElementById('questionSuggestions');
    const clearChatButton = document.getElementById('clearChatButton');

    const suggestedQuestions = [
        "¿Qué es la moda sostenible y por qué es importante?",
        "¿Cómo puedo encontrar mi propio estilo?",
        "¿Cuál es la diferencia entre moda y estilo?",
        "¿Qué es la moda inclusiva y por qué es importante?",
        "¿Cómo puedo saber si una prenda es de buena calidad?",
        "¿Qué es el 'fast fashion'?",
        "¿Qué es el 'upcycling' en moda?",
        "¿Cómo puedo vestirme para parecer más alto/a?"
    ];

    const qa = {
        '¿qué es la moda?': 'La moda es una forma de expresión que permite a las personas mostrar su personalidad y estilo a través de la ropa, los accesorios y el calzado. Incluye tendencias que evolucionan con el tiempo, influenciadas por la cultura, la sociedad y la tecnología.',
        '¿cuál es la diferencia entre moda y estilo?': 'La moda se refiere a las tendencias y prácticas populares en un momento específico, mientras que el estilo es una expresión personal y única de la identidad de una persona. La moda es temporal y cambiante, mientras que el estilo es duradero y propio de cada individuo.',
        '¿cómo puedo encontrar mi propio estilo?': 'Para encontrar tu estilo personal, empieza por observar tus gustos y preferencias. Prueba diferentes prendas y accesorios, y mantén un registro de lo que te hace sentir cómodo y seguro. Inspírate en íconos de moda, pero siempre añade tu toque personal.',
        '¿qué es la moda sostenible y por qué es importante?': 'La moda sostenible busca minimizar el impacto ambiental y social de la industria textil. Incluye prácticas como el uso de materiales ecológicos, la reducción de residuos y la promoción de condiciones laborales justas. Es importante para proteger el planeta y asegurar un futuro más justo.',
        '¿cómo puedo saber si una prenda es de buena calidad?': 'Para determinar si una prenda es de buena calidad, revisa las costuras (deben ser rectas y firmes), el material (debe sentirse duradero), los cierres y botones (deben estar bien asegurados), y lee la etiqueta para conocer la composición del tejido. También, investiga la reputación de la marca en cuanto a calidad.',
        '¿qué son las tendencias de moda?': 'Las tendencias de moda son estilos o prácticas populares en un momento específico. Pueden incluir colores, cortes, texturas o accesorios que se vuelven ampliamente adoptados en la industria de la moda.',
        '¿cómo puedo vestirme para una entrevista de trabajo?': 'Para una entrevista de trabajo, viste de manera profesional y conservadora. Opta por colores neutros, evita patrones llamativos y asegúrate de que tu ropa esté limpia y bien planchada. La clave es lucir pulcro y presentable.',
        '¿qué es el "fast fashion"?': 'El "fast fashion" se refiere a la producción rápida y barata de ropa para seguir las últimas tendencias. Aunque ofrece moda asequible, a menudo se critica por su impacto ambiental negativo y las condiciones laborales cuestionables.',
        '¿cómo puedo crear un guardarropa cápsula?': 'Un guardarropa cápsula consiste en piezas básicas y versátiles que se pueden combinar fácilmente. Comienza eligiendo una paleta de colores, selecciona prendas que se puedan mezclar y combinar, y prioriza la calidad sobre la cantidad.',
        '¿qué significa "prêt-à-porter"?': '"Prêt-à-porter" es un término francés que significa "listo para llevar". Se refiere a ropa producida en tallas estándar y vendida directamente al público, en contraste con la ropa hecha a medida.',
        '¿cómo puedo cuidar mejor mi ropa?': 'Para cuidar mejor tu ropa, lee y sigue las etiquetas de cuidado, lava la ropa del revés, usa bolsas de lavandería para prendas delicadas, evita el secado en secadora cuando sea posible y guarda la ropa adecuadamente para mantener su forma.',
        '¿qué es el "upcycling" en moda?': 'El "upcycling" en moda implica transformar prendas o materiales existentes en nuevas piezas de mayor valor. Es una práctica sostenible que reduce el desperdicio y fomenta la creatividad.',
        '¿cómo puedo vestirme para parecer más alto/a?': 'Para parecer más alto/a, usa prendas monocromáticas, opta por pantalones y faldas de talle alto, elige zapatos con un poco de tacón, y evita cortes que corten visualmente tu figura, como pantalones capri o faldas a media pierna.',
        '¿qué es el "color blocking"?': 'El "color blocking" es una técnica de moda que implica combinar bloques de colores contrastantes en un solo outfit. Puede crear looks audaces y llamativos cuando se hace correctamente.',
        '¿cómo puedo saber qué colores me favorecen?': 'Para determinar qué colores te favorecen, considera tu tono de piel, color de ojos y cabello. Prueba diferentes colores cerca de tu rostro y observa cuáles realzan tu complexión natural. También puedes consultar con un asesor de imagen para un análisis de color profesional.',
        '¿qué es la moda circular?': 'La moda circular es un enfoque que busca eliminar el desperdicio y maximizar el uso de recursos. Implica diseñar, producir y usar ropa de manera que los materiales puedan ser reutilizados o reciclados al final de su vida útil.',
        '¿cómo puedo vestirme para un evento formal?': 'Para un evento formal, considera un traje oscuro o un vestido de cóctel dependiendo del código de vestimenta. Opta por telas elegantes, accesorios discretos y zapatos formales. Asegúrate de que tu ropa esté bien ajustada y planchada.',
        '¿qué son las fibras sintéticas?': 'Las fibras sintéticas son materiales artificiales creados a través de procesos químicos. Incluyen poliéster, nylon y acrílico. Son duraderas y a menudo más baratas que las fibras naturales, pero pueden ser menos transpirables y tener un mayor impacto ambiental.',
        '¿cómo puedo adaptar las tendencias a mi estilo personal?': 'Para adaptar las tendencias a tu estilo personal, selecciona elementos que complementen tu guardarropa existente. Experimenta con accesorios o piezas pequeñas antes de comprometerte con looks completos, y siempre prioriza lo que te hace sentir cómodo y confiado.',
        '¿qué es el "greenwashing" en la industria de la moda?': 'El "greenwashing" en la moda se refiere a cuando las marcas exageran o falsean sus credenciales ecológicas para parecer más sostenibles de lo que realmente son. Es importante investigar las prácticas reales de una marca antes de creer en sus afirmaciones de sostenibilidad.',
        '¿cómo puedo vestirme para un cuerpo con forma de pera?': 'Para un cuerpo con forma de pera, busca equilibrar las proporciones resaltando la parte superior del cuerpo. Usa tops con detalles llamativos, chaquetas estructuradas, y pantalones o faldas que se ajusten en la cintura y se ensanchen ligeramente en las caderas.',
        '¿qué es el "streetwear"?': 'El "streetwear" es un estilo de moda casual que se originó en la cultura urbana y del skate. Se caracteriza por prendas cómodas como sudaderas, zapatillas deportivas y camisetas, a menudo con logos prominentes o diseños gráficos.',
        '¿cómo puedo crear un look elegante con un presupuesto limitado?': 'Para crear un look elegante con presupuesto limitado, invierte en piezas básicas de calidad que puedas combinar de múltiples maneras. Busca en tiendas de segunda mano o ventas de temporada, y presta atención al ajuste y los acabados, que pueden hacer que incluso prendas económicas parezcan más caras.',
        '¿qué es la "slow fashion"?': 'La "slow fashion" es un movimiento que promueve la producción y consumo de moda de manera más consciente y sostenible. Enfatiza la calidad sobre la cantidad, la producción ética, y la apreciación del proceso artesanal en la creación de prendas.',
        '¿cómo puedo identificar prendas de buena calidad en una tienda de segunda mano?': 'Para identificar prendas de calidad en una tienda de segunda mano, revisa las costuras (deben ser rectas y fuertes), comprueba los materiales (prefiere fibras naturales), examina los cierres y botones, y busca marcas conocidas por su calidad. También, presta atención al desgaste general de la prenda.'
    };

    function addSuggestions() {
        suggestedQuestions.forEach(question => {
            const button = document.createElement('button');
            button.textContent = question;
            button.classList.add('suggestion-button');
            button.addEventListener('click', () => {
                userInput.value = question;
                sendMessage();
            });
            questionSuggestions.appendChild(button);
        });
    }

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, 'user-message');
            userInput.value = '';
            showTypingIndicator();
            setTimeout(() => {
                removeTypingIndicator();
                respondToUser(message);
            }, 1500);
        }
    }

    function addMessage(text, className) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', className);
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('typing-indicator');
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    function clearChat() {
        while (chatMessages.firstChild) {
            chatMessages.removeChild(chatMessages.firstChild);
        }
        addMessage('¡Hola! Soy Chunkybot, tu asistente virtual especializado en moda y tendencia. ¿En qué puedo ayudarte hoy?', 'bot-message');
    }

    function respondToUser(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        let response = qa[lowerCaseMessage];

        if (!response) {
            for (let key in qa) {
                if (lowerCaseMessage.includes(key)) {
                    response = qa[key];
                    break;
                }
            }
        }

        if (!response) {
            response = "Lo siento, no tengo información específica sobre esa pregunta. ¿Puedes reformularla o preguntar sobre otro tema de moda?";
        }

        addMessage(response, 'bot-message');
    }

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    clearChatButton.addEventListener('click', clearChat);

    addSuggestions();
    clearChat(); // Initialize with welcome message
});