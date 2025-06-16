"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, MapPin, Users, Trophy, Heart, Mail, Phone, Instagram, Facebook, Twitter, Menu, X, Play, UserPlus, MessageCircle, Sparkles, Zap, Target, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"
import { ParticlesBackground } from "@/components/particles-background"
import { TypewriterText } from "@/components/typewriter-text"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-background to-lime-50 dark:from-purple-950 dark:via-background dark:to-lime-950 relative overflow-hidden">
      <ParticlesBackground />
      
      {/* Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-lime-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">PB</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-lime-600 bg-clip-text text-transparent">
                  COPA PASSA BOLA
                </h1>
                <p className="text-sm text-muted-foreground">Revolução Feminina</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['Início', 'Sobre', 'Torneios', 'Times', 'Galeria', 'Contato'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground hover:text-purple-600 font-medium transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-lime-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
              <ThemeToggle />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-purple-600 to-lime-400 text-white hover:from-purple-700 hover:to-lime-500">
                  Inscreva-se
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4 space-y-4 bg-background/95">
                {['Início', 'Sobre', 'Torneios', 'Times', 'Galeria', 'Contato'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-foreground hover:text-purple-600 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.a>
                ))}
                <div className="flex items-center justify-between pt-2">
                  <ThemeToggle />
                  <Button className="flex-1 ml-3 bg-gradient-to-r from-purple-600 to-lime-400 text-white">
                    Inscreva-se
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="início" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-lime-400 text-white px-6 py-2 text-lg animate-pulse-glow">
                🏆 Temporada 2024 - Inscrições Abertas
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-lime-400 bg-clip-text text-transparent animate-gradient">
                <TypewriterText 
                  text="COPA PASSA BOLA"
                  className="block"
                />
                <span className="block text-3xl md:text-4xl mt-4 text-muted-foreground">
                  Revolução no Futebol Feminino
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Onde o talento feminino brilha, a paixão se encontra e os sonhos se tornam realidade. 
                Junte-se à revolução que está transformando o futebol feminino!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-lime-400 text-white px-8 py-4 text-lg hover:from-purple-700 hover:to-lime-500 animate-pulse-glow">
                    <UserPlus className="mr-2" size={20} />
                    Inscrever Meu Time
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                    <Play className="mr-2" size={20} />
                    Assistir Highlights
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-to-br from-lime-400 to-green-400 rounded-full opacity-20"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </section>

      {/* Stats Section */}
      <AnimatedSection>
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Jogadoras", icon: Users, color: "from-purple-500 to-pink-500" },
                { number: "50+", label: "Times", icon: Trophy, color: "from-lime-500 to-green-500" },
                { number: "25+", label: "Torneios", icon: Calendar, color: "from-blue-500 to-purple-500" },
                { number: "100%", label: "Paixão", icon: Heart, color: "from-pink-500 to-red-500" }
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 animate-float`}>
                      <stat.icon className="text-white" size={24} />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection>
        <section id="sobre" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-lime-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Nossa Missão
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Promover a igualdade no esporte, criar oportunidades e celebrar o talento feminino no futebol
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Visão",
                  description: "Ser a principal plataforma de desenvolvimento do futebol feminino, criando oportunidades e quebrando barreiras.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: Heart,
                  title: "Valores",
                  description: "Igualdade, respeito, inclusão e excelência esportiva são os pilares que guiam cada ação da Copa Passa Bola.",
                  color: "from-lime-500 to-green-500"
                },
                {
                  icon: Zap,
                  title: "Impacto",
                  description: "Transformamos vidas através do esporte, criando uma comunidade forte e inspiradora de mulheres atletas.",
                  color: "from-blue-500 to-purple-500"
                }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -10, scale: 1.02 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-6 animate-float`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Tournaments Section */}
      <AnimatedSection>
        <section id="torneios" className="py-20 bg-gradient-to-br from-purple-50 to-lime-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-lime-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Próximos Torneios
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Competições que celebram o talento e a dedicação das nossas atletas
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Copa Primavera 2024",
                  date: "15-17 Março",
                  location: "São Paulo, SP",
                  teams: 16,
                  prize: "R$ 50.000",
                  status: "Inscrições Abertas",
                  image: "/api/placeholder/400/250"
                },
                {
                  title: "Torneio das Estrelas",
                  date: "22-24 Abril",
                  location: "Rio de Janeiro, RJ",
                  teams: 12,
                  prize: "R$ 30.000",
                  status: "Em Breve",
                  image: "/api/placeholder/400/250"
                },
                {
                  title: "Copa Verão Feminino",
                  date: "10-12 Maio",
                  location: "Belo Horizonte, MG",
                  teams: 20,
                  prize: "R$ 75.000",
                  status: "Planejamento",
                  image: "/api/placeholder/400/250"
                }
              ].map((tournament) => (
                <motion.div
                  key={tournament.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -10, scale: 1.02 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-lime-400 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className={`${
                        tournament.status === 'Inscrições Abertas' ? 'bg-green-500' :
                        tournament.status === 'Em Breve' ? 'bg-yellow-500' : 'bg-gray-500'
                      } text-white`}>
                        {tournament.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{tournament.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span>{tournament.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span>{tournament.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users size={16} className="mr-2" />
                        <span>{tournament.teams} times</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Trophy size={16} className="mr-2" />
                        <span>Premiação: {tournament.prize}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-lime-400 text-white hover:from-purple-700 hover:to-lime-500">
                      {tournament.status === 'Inscrições Abertas' ? 'Inscrever Time' : 'Saber Mais'}
                      <ChevronRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Teams Section */}
      <AnimatedSection>
        <section id="times" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-lime-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Times Participantes
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Conheça os times que fazem parte da nossa comunidade
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "Amazonas FC", "Estrelas do Sul", "Leoas Douradas", "Furacão Rosa",
                "Panteras Negras", "Águias Reais", "Tigres Brancos", "Lobas Selvagens",
                "Falcões Azuis", "Cobras Verdes", "Dragões Vermelhos", "Fênix Dourada"
              ].map((team) => (
                <motion.div
                  key={team}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-lime-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{team.charAt(0)}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm">{team}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection>
        <section id="galeria" className="py-20 bg-gradient-to-br from-lime-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-lime-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Momentos Especiais
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Reviva os melhores momentos dos nossos torneios
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                >
                  <div className="h-64 bg-gradient-to-br from-purple-400 to-lime-400 relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                        <Play size={16} className="mr-2" />
                        Ver Mais
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <section id="contato" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-lime-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Entre em Contato
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Pronta para fazer parte da revolução? Vamos conversar!
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "contato@copapassabola.com" },
                    { icon: Phone, label: "Telefone", value: "(11) 99999-9999" },
                    { icon: MapPin, label: "Endereço", value: "São Paulo, SP - Brasil" }
                  ].map((contact) => (
                    <motion.div
                      key={contact.label}
                      className="flex items-center space-x-4"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-lime-500 rounded-full flex items-center justify-center">
                        <contact.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{contact.label}</div>
                        <div className="text-muted-foreground">{contact.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Siga-nos nas Redes Sociais</h4>
                  <div className="flex space-x-4">
                    {[
                      { icon: Instagram, color: "from-pink-500 to-purple-500" },
                      { icon: Facebook, color: "from-blue-500 to-blue-600" },
                      { icon: Twitter, color: "from-blue-400 to-blue-500" }
                    ].map((social) => (
                      <motion.a
                        key={social.color}
                        href="#"
                        className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border">
                  <h3 className="text-2xl font-bold text-card-foreground mb-6">Envie uma Mensagem</h3>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-card-foreground mb-2">Nome</label>
                        <Input placeholder="Seu nome completo" className="bg-background border-border focus:border-purple-500 text-foreground placeholder:text-muted-foreground" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-card-foreground mb-2">Email</label>
                        <Input type="email" placeholder="seu@email.com" className="bg-background border-border focus:border-purple-500 text-foreground placeholder:text-muted-foreground" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">Assunto</label>
                      <Input placeholder="Assunto da mensagem" className="bg-background border-border focus:border-purple-500 text-foreground placeholder:text-muted-foreground" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">Mensagem</label>
                      <Textarea 
                        placeholder="Sua mensagem..." 
                        rows={5} 
                        className="bg-background border-border focus:border-purple-500 resize-none text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-lime-400 text-white hover:from-purple-700 hover:to-lime-500 py-3">
                        <MessageCircle className="mr-2" size={20} />
                        Enviar Mensagem
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-purple-900 to-lime-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-lime-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">PB</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">COPA PASSA BOLA</h3>
                  <p className="text-sm opacity-80">Revolução Feminina</p>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Promovendo a igualdade no esporte e celebrando o talento feminino no futebol.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {['Início', 'Sobre', 'Torneios', 'Times', 'Galeria', 'Contato'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>contato@copapassabola.com</p>
                <p>(11) 99999-9999</p>
                <p>São Paulo, SP - Brasil</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-3">
                {[
                  { icon: Instagram, color: "hover:text-pink-400" },
                  { icon: Facebook, color: "hover:text-blue-400" },
                  { icon: Twitter, color: "hover:text-blue-300" }
                ].map((social) => (
                  <motion.a
                    key={social.color}
                    href="#"
                    className={`opacity-80 ${social.color} transition-colors`}
                    whileHover={{ scale: 1.2 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-80">
              © 2024 Copa Passa Bola. Todos os direitos reservados. Feito com ❤️ para o futebol feminino.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}