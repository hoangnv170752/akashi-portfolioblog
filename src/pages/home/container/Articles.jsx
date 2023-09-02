import React from 'react'
import ArticleCard from '../../../components/ArticleCard'
import { FaArrowRight } from 'react-icons/fa'
function Articles() {
  return (
    <section className='container flex flex-col mx-auto px-5 py-10'>
        <div className='flex flex-wrap md:gap-x-5 gap-y-5 pb-10'>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </div>
        <button className='mx-auto flex items-center gap-x-2 font-bold text-primary border-primary px-6 py-3 rounded-lg border-2'>
            <span>More Articles</span>
            <FaArrowRight className='w-3 h-3'/>
        </button>
    </section>
  )
}

export default Articles