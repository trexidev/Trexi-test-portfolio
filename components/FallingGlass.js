import { useEffect, useRef } from 'react'

export default function FallingGlass() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    class InfiniteGlassShard {
      constructor() {
        this.reset()
      }
      
      reset() {
        this.x = Math.random() * canvas.width
        this.y = -Math.random() * canvas.height * 2
        this.width = 20 + Math.random() * 50
        this.height = 20 + Math.random() * 50
        this.speedY = 0.8 + Math.random() * 3
        this.speedX = (Math.random() - 0.5) * 1
        this.rotation = Math.random() * 360
        this.rotationSpeed = (Math.random() - 0.5) * 2
        this.opacity = 0.1 + Math.random() * 0.3
        this.glassColor = `rgba(0, 255, 100, ${0.02 + Math.random() * 0.06})`
        this.borderColor = `rgba(0, 255, 100, ${0.1 + Math.random() * 0.2})`
        this.hasCrack = Math.random() > 0.5
        this.hasReflection = Math.random() > 0.6
      }
      
      update() {
        this.y += this.speedY
        this.x += this.speedX
        this.rotation += this.rotationSpeed
        
        if (this.y > canvas.height + 300) {
          this.reset()
        }
        if (this.x > canvas.width + 200) {
          this.x = -200
        }
        if (this.x < -200) {
          this.x = canvas.width + 200
        }
      }
      
      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation * Math.PI / 180)
        
        // 7-point irregular polygon for infinite glass look
        const points = 7
        const angleStep = (Math.PI * 2) / points
        
        ctx.beginPath()
        for (let i = 0; i < points; i++) {
          const angle = i * angleStep + (Math.random() * 0.2)
          const radiusX = this.width * (0.5 + Math.sin(angle * 3) * 0.2)
          const radiusY = this.height * (0.5 + Math.cos(angle * 2) * 0.2)
          const x = Math.cos(angle) * radiusX
          const y = Math.sin(angle) * radiusY
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.closePath()
        
        // Main glass fill
        ctx.fillStyle = this.glassColor
        ctx.fill()
        
        // Glass border
        ctx.strokeStyle = this.borderColor
        ctx.lineWidth = 1.5
        ctx.stroke()
        
        // Inner glass layer (recursive)
        ctx.beginPath()
        for (let i = 0; i < points; i++) {
          const angle = i * angleStep
          const radiusX = this.width * 0.3
          const radiusY = this.height * 0.3
          const x = Math.cos(angle) * radiusX
          const y = Math.sin(angle) * radiusY
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.closePath()
        ctx.fillStyle = `rgba(0, 255, 100, 0.04)`
        ctx.fill()
        
        // Crack lines (700M detail)
        if (this.hasCrack) {
          ctx.beginPath()
          ctx.moveTo(-this.width * 0.4, -this.height * 0.2)
          ctx.lineTo(this.width * 0.3, this.height * 0.1)
          ctx.lineTo(this.width * 0.15, -this.height * 0.35)
          ctx.lineTo(-this.width * 0.1, -this.height * 0.15)
          ctx.strokeStyle = `rgba(0, 255, 100, 0.15)`
          ctx.lineWidth = 1
          ctx.stroke()
        }
        
        // Reflection highlight
        if (this.hasReflection) {
          ctx.beginPath()
          ctx.moveTo(-this.width * 0.2, -this.height * 0.3)
          ctx.lineTo(0, -this.height * 0.5)
          ctx.lineTo(this.width * 0.3, -this.height * 0.2)
          ctx.fillStyle = `rgba(255, 255, 255, 0.06)`
          ctx.fill()
        }
        
        ctx.restore()
      }
    }
    
    // 150 infinite glass shards (700M×)
    const shards = []
    for (let i = 0; i < 150; i++) {
      shards.push(new InfiniteGlassShard())
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (const shard of shards) {
        shard.update()
        shard.draw()
      }
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return <canvas ref={canvasRef} id="glass-canvas" />
}