"use client"
import { Rocket, Sparkles } from "lucide-react"
import { useRef, useLayoutEffect } from "react"
import { CanvaComponent } from "./canva"
import gsap from "gsap"

export default function Hero() {
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonsRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(buttonsRef)

      const tl = gsap.timeline({ delay: 0.3, ease: "power3.out" })

      tl.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 }
      )
        .fromTo(
          paragraphRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          q("button"),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", stagger: 0 },
          "-=0.6"
        )
    }, [buttonsRef])

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen pt-16 bg-black">
      <div className="absolute inset-0">
        <CanvaComponent />
      </div>

      <div className="relative container h-full flex flex-col justify-center items-center md:items-start px-4 md:px-6 z-10">
        <div className="max-w-2xl space-y-4 text-center md:text-left">
          <h1
            ref={headingRef}
            className="font-poppins text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white"
          >
            Olá, me chamo{" "}
            <span className="text-red-600 font-bold">Mauro</span>{" "}
            &{" "}
            <span className="text-red-600 font-bold">sou Desenvolvedor</span>
          </h1>

          <p ref={paragraphRef} className="text-xl text-gray-300">
            Transformando ideias em experiências digitais incríveis. Especializado em design de UI/UX e desenvolvimento web.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-row items-center gap-4 mt-8 justify-center md:justify-start md:gap-6"
          >


            <button
              className="cursor-pointer h-14 px-8 py-4 bg-gradient-to-r from-[#FF0000] to-pink-900 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-red-600/20"

            >
              <Rocket className="w-5 h-5" />
              Iniciar Projeto
            </button>

            <button
              className="cursor-pointer h-14 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 border-2 border-white/10 hover:border-red-600 text-white transition-colors duration-300"
            >
              <Sparkles className="w-5 h-5" />
              Ver Portfólio
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
