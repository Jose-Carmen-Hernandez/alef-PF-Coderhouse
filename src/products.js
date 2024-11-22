//se recomienda usar el mismo nombre de este array en la coleccion de la BD de Firebase:
const products = [
  {
    id: "1",
    title: "computadora de escritorio hp ",
    price: 14900,
    stock: 0,
    imageUrl: 'https://res.cloudinary.com/dkkwppueg/image/upload/v1729220407/s-l1600_q2unat.webp',
    description: 'Desktop HP Pro SFF 280 G9 Pantalla 17" Informática empresarial esencial Procesador Intel® Core™ i3 de 12.ª generación Windows 11 Pro8 GB de RAM DDR4-3200 MHz (1 x 8 GB)Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GBGráficos Intel® UHD 730',
    category: "computadoras"
  },
  {
    id: "2",
    title: 'laptop Dell Inspiron 15 3520, 15.6", Intel Core i5 12th, 8GB DDR4, 512GB SSD, Intel UHD',
    price: 12500,
    stock: 5,
    imageUrl: "https://res.cloudinary.com/dkkwppueg/image/upload/v1729219885/s-l960_yjwxk4.webp",
    description: 'Procesador Intel Core i5 1255U (Hasta 4,7 GHz), Memoria de 16GB DDR4, SSD de 512GB, Pantalla de 15.6" LED, 120Hz, Video Iris Xe Graphics, S.O. Windows 11 Home (64 Bits)',
    category: "computadoras"
  },
  {
    id: "3",
    title: "audífonos para Gaming HP Pavilion 400, negro/verde",
    price: 1250,
    stock: 10,
    imageUrl: 'https://res.cloudinary.com/dkkwppueg/image/upload/v1729224644/hp-headphones_mhh9hb.jpg',
    description: "GRAVES PROFUNDOS. AGUDOS NÍTIDOS. SONIDO INCREÍBLE. Auriculares y banda para la cabeza revestidos en cuero sintético suave acolchado para ofrecer comodidad. Micrófono integrado. Control de volumen  en cable. Multi plaforma.",
    category: "accesorios"
  },
  {
    id: "4",
    title: "bocina Multimedia Edifier R19bt",
    price: 2500,
    stock: 6,
    imageUrl: 'https://res.cloudinary.com/dkkwppueg/image/upload/v1729224442/bocinas-r19_nbwzgy.jpg',
    description: "Lo que tienes que saber de este producto: Tipo de bocina: torre. Con conectividad bluetooth.Potencia de 4W.Cantidad de bocinas: 2. Lugar de colocación: escritorio. Dimensiones: 85mm de ancho, 175mm de alto y 130mm de profundidad.",
    category: "accesorios"
  },
  {
    id: "5",
    title: "smartphone Motorola Edge 50 Pro 512GB Morado Desbloqueado",
    price: 10950,
    stock: 7,
    imageUrl: 'https://res.cloudinary.com/dkkwppueg/image/upload/v1729221002/00084002325774L_f85xa1.jpg',
    description: "Te presentamos el motorola edge 50 pro, un teléfono lleno de vida que irradia arte.  -Gracias a los materiales naturales al tacto, los bordes curvos que ofrecen comodidad y las experiencias intuitivas, es un dispositivo de primer nivel  -Captura movimientos gracias a la tecnología de cámara con moto ai -Recarga tu teléfono a toda velocidad con la carga TurboPower de 125 W y disfruta de las experiencias Moto exclusivas. -Conoce el motorola edge 50 pro. Más que un teléfono; una obra de arte. Recuerda que ya puedes realizar tus compras en la tienda en línea, en donde también encontrarás todo lo necesario para tu día a día o para surtir la despensa de tu hogar. Compra lo que necesites ya que con nuestro servicio de entregas a domicilio tus compras llegarán hasta la puerta de tu hogar.",
    category: "celulares"
  },
  {
    id: "6",
    title: "i-pad pro max",
    price: 15800,
    stock: 4,
    imageUrl: 'https://res.cloudinary.com/dkkwppueg/image/upload/v1729224776/ipad-pro-max_awbg12.jpg',
    description: "Chip Apple M1 para un rendimiento de siguiente nivel. Cuatro altavoces de audio y cinco micrófonos de calidad de estudio. Brillante visualización Liquid Retina XDR de 12,9 pulgadas con ProMotion, True Tone y P3 de color amplio. Sistema de cámara TrueDepth con cámara ultra ancha con centro de escenario. Cámara ancha de 12 MP, cámara ultra ancha de 10 MP, y escáner LiDAR para una AR inmersiva. 5G para descargas súper rápidas y transmisión de alta calidad. Mantente conectado con Wi-Fi ultrarrápido. Ve más allá con la batería de duración todo el día. Puerto Thunderbolt para conectarse a almacenamiento externo rápido, pantallas y puertos. Face ID para autenticación segura y Apple Pay",
    category: "celulares"
  },
  {
    id: "7",
    title: 'monitor LG 27MK430H-B PC Monitor 27" IPS FHD 75Hz 5ms AMD FreeSync HDMI, D-Sub',
    price: 6999,
    stock: 2,
    imageUrl: 'https://res.cloudinary.com/dkkwppueg/image/upload/v1729221646/monitor-juegos-27_ufl5xy.jpg',
    description: "Voltaje: 100V/240V. Tamaño de la pantalla: 27 \" LCD, antirreflejo.  Tiene una resolución de 1920px-1080px.  Relación de aspecto de 16:9. Panel IPS. Brillo es de 350cd/m². Con conexión 2 HDMI 2.0. Reclinable",
    category: "monitores"
  },
  {
    id: "8",
    title: "laptop HP Pavillion",
    price: 8450,
    stock: 3,
    imageUrl: 'https://res.cloudinary.com/dkkwppueg/image/upload/v1729222190/hp-gamer_qukdwa.webp',
    description: 'Pantalla HD de 14"Procesador AMD Athlon Silver 3050U. Gráficas AMD Radeon. Sistema Operativo Windows 10 Home. Diseño delgado y ultra portable para mantenerte socialmente conectado y productivo. Con batería de larga duración y pantalla de borde delgado la HP Laptop es tu compañera ideal. Con el poder del procesador AMD de nueva generación y hasta 10 horas de batería, es perfecta para todas tus tareas. Diseñado para ser 100% portable, con bordes súper delgados y tamaño más compacto.',
    category: "computadoras"
  },
  {
    id: "9",
    title: 'apple iPhone 15 Pro Max Super Retina XDR 6.7"',
    price: 22450,
    stock: 2,
    imageUrl: 'https://res.cloudinary.com/dkkwppueg/image/upload/v1729222376/zqrsrinhlw3qqbxn5550.jpg',
    description: 'Pantalla HD de 14"Procesador AMD Athlon Silver 3050U. Gráficas AMD Radeon. Sistema Operativo Windows 10 Home. Diseño delgado y ultra portable para mantenerte socialmente conectado y productivo. Con batería de larga duración y pantalla de borde delgado la HP Laptop es tu compañera ideal. Con el poder del procesador AMD de nueva generación y hasta 10 horas de batería, es perfecta para todas tus tareas. Diseñado para ser 100% portable, con bordes súper delgados y tamaño más compacto.',
    category: "celulares"
  },
  {
    id: "10",
    title: 'monitor curvo 32" SAMSUNG',
    price: 4450,
    stock: 9,
    imageUrl: 'https://res.cloudinary.com/dkkwppueg/image/upload/v1729222567/samsung32-curvo_pcdbhb.jpg',
    description: 'NUEVO Samsung 32" Curvo Monitor LED Oficina Hogar 4ms 75 Hz Windows 10 1920 x 1080',
    category: "monitores"
  },
  {
    id: "11",
    title: 'monitor curvo 34" SAMSUNG',
    price: 5450,
    stock: 4,
    imageUrl: 'https://res.cloudinary.com/dkkwppueg/image/upload/v1729222652/monitor-curvo-34_nyryo3.jpg',
    description: 'Monitor curvo LED de 34" Samsung S65UA Series S34C654UAN 3440x1440p',
    category: "monitores"
  },
  {
    id: "12",
    title: "mousse óptico",
    price: 545,
    stock: 11,
    imageUrl: 'https://res.cloudinary.com/dkkwppueg/image/upload/v1729222714/gaming-mousse_zyiome.jpg',
    description: "HXSJ S200 USB con cable 1600 DPI Ratón óptico para juegos 4 botones",
    category: "accesorios"
  }
]



export default products