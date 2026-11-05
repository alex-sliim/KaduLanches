import logoTrans from "@/assets/logo_trans.png";
import heroImg from "@/assets/hero.jpg";
import enroladinho from "@/assets/enroladinho.jpg";
import esfirra from "@/assets/esfirra.jpg";
import coxinha from "@/assets/coxinha.jpg";
import kibe from "@/assets/kibe.jpg";
import rosca from "@/assets/rosca.jpg";
import minipizza from "@/assets/minipizza.jpg";
import caixa from "@/assets/caixa.jpg";

export const BRAND = {
  name: "Kadu Lanches",
  tagline: "Lanche do Kadu",
  whatsappDisplay: "(62) 99988-2515",
  whatsappRaw: "5562999882515",
  logo: logoTrans,
  logoTrans,
  hero: heroImg,
};

export function waLink(message: string) {
  return `https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_MSG =
  "Olá, Kadu! 👋 Vi o site do Kadu Lanches e quero fazer um pedido de salgados.";

export type Product = {
  name: string;
  desc: string;
  img: string;
  tag?: string;
  emoji: string;
  ingredients: string[];
};

export const PRODUCTS: Product[] = [
  {
    name: "Enroladinho de Queijo",
    desc: "Massa douradinha por fora e um queijo derretendo por dentro. O clássico que nunca sobra.",
    img: enroladinho,
    tag: "Mais pedido",
    emoji: "🧀",
    ingredients: ["Queijo mussarela", "Massa assada", "Gergelim"],
  },
  {
    name: "Esfirra de Carne",
    desc: "Recheio generoso de carne moída temperada na hora, com tomate e cebola. Assada na hora.",
    img: esfirra,
    tag: "Favorita da galera",
    emoji: "🥟",
    ingredients: ["Carne moída", "Tomate & cebola", "Limão siciliano"],
  },
  {
    name: "Coxinha de Frango",
    desc: "Frango desfiado cremoso com requeijão, envolto numa casquinha crocante e sequinha.",
    img: coxinha,
    emoji: "🍗",
    ingredients: ["Frango desfiado", "Requeijão", "Massa crocante"],
  },
  {
    name: "Kibe Frito",
    desc: "Trigo fino, carne e hortelã fresquinha. Crocante por fora, suculento por dentro.",
    img: kibe,
    emoji: "🌰",
    ingredients: ["Trigo para quibe", "Carne bovina", "Hortelã fresca"],
  },
  {
    name: "Rosca Ungara de Coco",
    desc: "Fofinha, pincelada com calda brilhante e coberta de coco. Faz qualquer café valer a pena.",
    img: rosca,
    tag: "Doce da casa",
    emoji: "🥮",
    ingredients: ["Coco ralado", "Calda açúcar", "Massa artesanal"],
  },
  {
    name: "Mini Pizza & Batatinha",
    desc: "Mini pizzas com presunto, queijo e orégano, acompanhando a batata frita sequinha.",
    img: minipizza,
    emoji: "🍕",
    ingredients: ["Presunto & queijo", "Orégano", "Batata frita"],
  },
  {
    name: "Caixa de Salgados Assados",
    desc: "Mix de salgados assados para festa, reunião ou aquele café da tarde em família.",
    img: caixa,
    tag: "Para festas",
    emoji: "📦",
    ingredients: ["Empadinhas", "Pastéis assados", "Pão de calabresa"],
  },
];

export type Review = {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
  initials: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Juliana Marques",
    role: "Cliente há 2 anos",
    text: "Pedi caixa de salgados pro aniversário do meu filho e foi o sucesso da festa! Enroladinho de queijo então… acabou em 10 minutos. Atendimento super rápido no WhatsApp.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/7665704/pexels-photo-7665704.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200",
    initials: "JM",
  },
  {
    name: "Rafael Souza",
    role: "Pediu enroladinho",
    text: "Melhor enroladinho da região, sem exagero. Chegou quentinho, massa leve e o queijo puxando. Já virou meu pedido fixo toda semana no trabalho.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200",
    initials: "RS",
  },
  {
    name: "Camila Rodrigues",
    role: "Café da tarde",
    text: "A rosca ungara de coco é maravilhosa, parece feita na hora. Pedi no WhatsApp às 9h e às 11h já estava aqui. Ganhei até um brinde 💛",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/7665702/pexels-photo-7665702.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200",
    initials: "CR",
  },
  {
    name: "Thiago Almeida",
    role: "Encomenda para empresa",
    text: "Fechamos o café da manhã da empresa com o Kadu. Todos os 120 salgados chegaram no horário, quentinhos e bem embalados. Profissionalismo de gente grande.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200",
    initials: "TA",
  },
  {
    name: "Patrícia Lima",
    role: "Professora",
    text: "A esfirra de carne é absurda de boa. Recheio bem servido e massa macia. Meus alunos já sabem o dia do 'salgado do Kadu' aqui na escola 😄",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/16160869/pexels-photo-16160869.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200",
    initials: "PL",
  },
  {
    name: "Bruno Ferreira",
    role: "Vizinho do bairro",
    text: "Coxinha crocante e o kibe com aquele gostinho de hortelã. Nunca demoram e nunca me deixaram na mão. Recomendo de olhos fechados!",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/35681211/pexels-photo-35681211.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200",
    initials: "BF",
  },
];

export const DIFFERENTIALS = [
  {
    emoji: "🔥",
    title: "Assado na hora",
    desc: "Forno ligado de manhã cedo. Seu pedido sai quentinho, direto da assadeira.",
  },
  {
    emoji: "🧈",
    title: "Ingredientes de verdade",
    desc: "Massa artesanal feita todos os dias, queijo de qualidade e recheio caprichado.",
  },
  {
    emoji: "⚡",
    title: "Pedido em 1 minuto",
    desc: "É só chamar no WhatsApp, escolher e pronto. Sem app, sem cadastro, sem enrolação.",
  },
  {
    emoji: "🎉",
    title: "Encomendas para festas",
    desc: "Aniversário, reunião, café da empresa. Montamos a caixa do tamanho do seu evento.",
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Chama no WhatsApp",
    desc: "Clique no botão e fale direto com a gente. Respondemos rapidinho.",
  },
  {
    n: "02",
    title: "Escolhe seus salgados",
    desc: "Conte quantas pessoas e a gente indica a quantidade perfeita pra você não faltar nada.",
  },
  {
    n: "03",
    title: "Recebe quentinho",
    desc: "Combinamos o horário e o seu pedido sai fresquinho do forno até você.",
  },
];

export const GALLERY = [enroladinho, esfirra, caixa, rosca, coxinha, kibe, minipizza];
