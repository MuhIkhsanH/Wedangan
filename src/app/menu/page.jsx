"use client"
import { useState, useMemo } from 'react'
import Image from 'next/image'
import { nasiMenu, gorenganMenu, minumanMenu, snackMenu } from '@/data/menuData'

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Combine all menu data with category information
  const allMenuData = useMemo(() => [
    ...nasiMenu.map(item => ({ ...item, category: 'nasi', categoryName: 'Menu Nasi' })),
    ...gorenganMenu.map(item => ({ ...item, category: 'gorengan', categoryName: 'Gorengan' })),
    ...minumanMenu.map(item => ({ ...item, category: 'minuman', categoryName: 'Minuman' })),
    ...snackMenu.map(item => ({ ...item, category: 'snack', categoryName: 'Snack' }))
  ], [])

  // Filter menu items based on search term and selected category
  const filteredMenu = useMemo(() => {
    return allMenuData.filter(item => {
      const matchesSearch = item.nama.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [allMenuData, searchTerm, selectedCategory])

  // Get unique categories for filter buttons
  const categories = [
    { id: 'all', name: 'Semua', icon: '🍽️' },
    { id: 'nasi', name: 'Menu Nasi', icon: '🍚' },
    { id: 'gorengan', name: 'Gorengan', icon: '🥟' },
    { id: 'minuman', name: 'Minuman', icon: '🥤' },
    { id: 'snack', name: 'Snack', icon: '🍰' }
  ]

  const renderMenuCard = (item, idx) => (
    <div 
      key={`${item.category}-${idx}`} 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 text-left group"
      data-aos="fade-up"
      data-aos-delay={idx * 50}
    >
      <div className="relative overflow-hidden rounded-lg mb-3">
        <Image
          src={item.gambar}
          alt={item.nama}
          width={400}
          height={300}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 bg-red-800 text-white px-2 py-1 rounded-full text-xs font-medium">
          {item.categoryName}
        </div>
      </div>
      <div className="text-lg font-semibold text-gray-800 mb-1">{item.nama}</div>
      <div className="text-red-600 font-bold text-xl">Rp {item.harga.toLocaleString()}</div>
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-red-800 mb-8" data-aos="fade-down">
        🍽️ Daftar Menu
      </h1>

      {/* Search Bar */}
      <div className="mb-8" data-aos="fade-up" data-aos-delay="100">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Cari menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-red-800 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      {searchTerm && (
        <div className="text-center mb-6" data-aos="fade-up" data-aos-delay="300">
          <p className="text-gray-600">
            {filteredMenu.length} menu ditemukan untuk "{searchTerm}"
          </p>
        </div>
      )}

      {/* Menu Grid */}
      {filteredMenu.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMenu.map((item, idx) => renderMenuCard(item, idx))}
        </div>
      ) : (
        <div className="text-center py-12" data-aos="fade-up" data-aos-delay="300">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Menu tidak ditemukan</h3>
          <p className="text-gray-500">
            Coba ubah kata kunci pencarian atau pilih kategori yang berbeda
          </p>
        </div>
      )}

      {/* Quick Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="400">
        <div className="bg-red-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-800">{nasiMenu.length}</div>
          <div className="text-sm text-gray-600">Menu Nasi</div>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-800">{gorenganMenu.length}</div>
          <div className="text-sm text-gray-600">Gorengan</div>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-800">{minumanMenu.length}</div>
          <div className="text-sm text-gray-600">Minuman</div>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-800">{snackMenu.length}</div>
          <div className="text-sm text-gray-600">Snack</div>
        </div>
      </div>
    </div>
  )
}
