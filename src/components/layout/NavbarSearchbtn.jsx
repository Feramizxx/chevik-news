import { ReactComponent as Search } from '../../assets/icons/search.svg';
import React, { useState } from 'react'
import { apiBaseURL } from './../../app/App';
import axios from 'axios';
import { useNavigate } from 'react-router';
import helpers from '../../helpers';

const listItemStyle = `absolute ml-[-7.5rem]`;

export default function NavbarSearchbtn() {
  const [search, setSearch] = useState('');
  const [searchedNews, setSearchedNews] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const searchbuttonHandler = () => {
    setIsVisible(!isVisible);
  };

  const reset = () => {
    setIsVisible(false);
    setSearchedNews([]);
    setSearch('');
  }

  window.onclick = () => {
    reset();
  }

  const onLinkClick = (slug) => {
    helpers.scrollTop();
    navigate(`/single-news/${slug}`);
    reset();
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const url = apiBaseURL + `posts?search=${search}`;
    try {
      const resposne = await axios.get(url);
      setSearchedNews(resposne.data.data.posts);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <ul className='z-10' onClick={(e) => e.stopPropagation()}>
        <li> <Search className='clickable' onClick={searchbuttonHandler} /> </li>
        <li className={listItemStyle + ' mb-[-1em] lg:mt-4 max-nav:bottom-2'}>
          {isVisible &&
            <form onSubmit={onSubmit}>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-black px-8 py-2"
                type="text"
                placeholder="Search..."
              />
            </form>
          }
        </li>
        <li className={listItemStyle + ' mt-16'}>
          {setSearchedNews.length !== 0 && isVisible &&
            <ul>
              {searchedNews.map((news) => {
                return (
                  <div key={news.id} onClick={() => onLinkClick(news.slug)} className='searched-item clickable flex items-center gap-1 bg-primary-card px-4 py-2 justify-between w-[100vw] max-w-[260px]'>
                    <p className='text-white font-bold'> {news.title} </p>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1.41L4.94467 6L0 10.59L1.52227 12L8 6L1.52227 0L0 1.41Z" fill="white" />
                    </svg>
                  </div>
                )
              })}
            </ul>
          }
        </li>
      </ul>
    </>
  )
}