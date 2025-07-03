<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-5xl md:text-7xl font-bold mb-6" data-aos="fade-up">
          智能播种机器人
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          基于机器视觉与深度学习的精准农业播种解决方案
        </p>
        <div class="space-x-4" data-aos="fade-up" data-aos-delay="400">
          <el-button type="primary" size="large" @click="$router.push('/overview')">
            了解项目
          </el-button>
          <el-button size="large" @click="$router.push('/technical')">
            技术详情
          </el-button>
        </div>
      </div>
      
      <!-- Floating particles -->
      <div class="absolute inset-0 overflow-hidden">
        <div v-for="i in 20" :key="i" 
             class="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
             :style="getParticleStyle(i)">
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">核心特色</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            结合先进的机器视觉技术和深度学习算法，实现精准、高效的智能播种
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(feature, index) in features" :key="index"
               class="feature-card p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-xl transition-all duration-300"
               data-aos="fade-up" :data-aos-delay="index * 200">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <el-icon class="text-white text-2xl" :class="feature.icon"></el-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div v-for="(stat, index) in stats" :key="index" data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="text-4xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-xl opacity-90">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Preview -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">技术创新</h2>
            <p class="text-xl text-gray-600 mb-8">
              采用最新的机器视觉和深度学习技术，实现种子识别、土壤分析和精准播种的全自动化流程。
            </p>
            <div class="space-y-4">
              <div v-for="tech in technologies" :key="tech.name" class="flex items-center space-x-4">
                <div class="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <span class="text-gray-700">{{ tech.name }}</span>
                <div class="flex-1 bg-gray-200 rounded-full h-2">
                  <div class="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                       :style="{ width: tech.progress + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <div class="relative">
              <div class="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <el-icon class="text-8xl text-blue-600"><Setting /></el-icon>
              </div>
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <el-icon class="text-white text-2xl"><Star /></el-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const features = [
  {
    icon: 'View',
    title: '机器视觉识别',
    description: '高精度图像识别技术，准确识别种子类型和土壤状况'
  },
  {
    icon: 'DataAnalysis',
    title: '深度学习算法',
    description: '智能分析播种环境，优化播种策略和路径规划'
  },
  {
    icon: 'Setting',
    title: '精准播种控制',
    description: '毫米级精度控制，确保播种深度和间距的准确性'
  }
]

const stats = [
  { value: '95%', label: '播种精度' },
  { value: '3倍', label: '效率提升' },
  { value: '85%', label: '成本节约' },
  { value: '24/7', label: '全天候作业' }
]

const technologies = [
  { name: '计算机视觉', progress: 95 },
  { name: '深度学习', progress: 90 },
  { name: '机械控制', progress: 88 },
  { name: '传感器融合', progress: 92 }
]

const getParticleStyle = (index: number) => {
  return {
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    animationDelay: Math.random() * 20 + 's',
    animationDuration: (Math.random() * 10 + 10) + 's'
  }
}

onMounted(() => {
  // Add any additional animations or interactions here
})
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.animate-float {
  animation: float linear infinite;
}

.feature-card {
  transform: translateY(0);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}
</style>