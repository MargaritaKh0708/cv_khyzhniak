import photo from '../../assets/photo.jpg'
import web from '../../assets/web1.webp';
import web1 from '../../assets/web2.webp';
import web2 from '../../assets/web3.webp';

export const Resume = () => {
  return (
    <div className='resume container'>
      <div className='resume__part resume__part--background'>
        <div className='resume__photo' style={{ background: `top /cover no-repeat url(${photo})` }}>
        </div>
        <div className='resume__title'>
          <span className='resume__title-separator' />
          <span className='resume__title-text'> PROFILE </span>
          <span className='resume__title-separator' />
        </div>
        <div className='resume__descrip'>
          <span>I’m a beginner front-end developer, who's looking for the first job in a company. My main goal is to grow and catch higher level step by step in a short time. So I intend to be a part of an interesting project, progressive team and open-mind company, that facilitate my growth
            by providing valuable experience.  </span>
        </div>
        <ul className='resume__personal-info-list'>
          <li className='resume__personal-info-item'>
            <span className='resume__personal-title'> ADDRESS:</span>
            <span className='resume__personal-content resume__personal-content--line'>
              from: Kherson, Ukraine; <br />
              currently: Kyiv, Ukraine;<br />
              availible: Worldwide; <br />
            </span>
          </li>
          <li className='resume__personal-info-item'>
            <span className='resume__personal-title'>PHONE:</span>
            <a className='resume__personal-content' href='tel:(073) 221-46-41'>(073) 221-46-41</a>
          </li>
          <li className='resume__personal-info-item'>
            <span className='resume__personal-title'>EMAIL:</span>
            <span className='resume__personal-content'> khyzhnyak.margaryta@gmail.com </span>
          </li>
          <li className='resume__personal-info-item'>
            <span className='resume__personal-title'>Social:</span>
            <span className='resume__personal-content'>
              <a className='resume__personal-icon' target="_blank" rel="noreferrer" href='https://www.facebook.com/margarita.khizhnyak.3'><span class="icon-facebook2"></span></a>
              <a className='resume__personal-icon' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/margarita-khizhnyak-29340a229'><span class="icon-linkedin"></span></a>
              <a className='resume__personal-icon' target="_blank" rel="noreferrer" href='https://github.com/MargaritaKh0708'><span style={{padding: '2px'}}>Git</span></a>
            </span>

          </li>
        </ul>
        <div className='resume__title'>
          <span className='resume__title-separator' />
          <span className='resume__title-text'> SKILLS </span>
          <span className='resume__title-separator' />
        </div>
        <div className='resume__skills soft-skills'>
          <div className='resume__skills-item item_0' > <span className='resume__skills-title'>Communication</span></div>
          <div className='resume__skills-item item_0'> <span className='resume__skills-title'>Self-Motivation</span></div >
          <div className='resume__skills-item item_0' > <span className='resume__skills-title'>Responsibility</span></div >
        </div>
        <div className='resume__skills hard-skills'>
          <div className='resume__skills-item item_6' > <span className='resume__skills-title'>HTML, CSS, Sass, Git, Heroku</span></div>
          <div className='resume__skills-item item_6'> <span className='resume__skills-title'>React, JS, Pug, Axios</span></div >
          <div className='resume__skills-item item_6' > <span className='resume__skills-title'>TypeScript, Tailwind CSS</span></div >
        </div>
        <div className='resume__title'>
          <span className='resume__title-separator' />
          <span className='resume__title-text resume__title-text--font'> Languages </span>
          <span className='resume__title-separator' />
        </div>
        <div className='resume__skills soft-skills'>
          <div className='resume__skills-item item_4' > <span className='resume__skills-title'>Ukrainian</span></div>
          <div className='resume__skills-item item_5'> <span className='resume__skills-title'>English</span></div >
          <div className='resume__skills-item item_4' > <span className='resume__skills-title'>Russian</span></div >
        </div>
      </div>
      <div className='resume__part resume__part--flex'>
        <div className='resume__header'>
          <h1 className='resume__username'> Marharyta Khyzhnyak </h1>
          <div className='resume__subtitle'> Front - end developer </div>
        </div>
        <div className='resume__title'>
          <span className='resume__title-separator' />
          <span className='resume__title-text'> experience </span>
          <span className='resume__title-separator' />
        </div>
        <div className='resume__experience'>
        <div className='resume__experience-item'>
            <div className='resume__experience-item-header'>
              <span className='resume__experience-term'>2022-2022</span>
              <span className='resume__experience-organization'> Freelance <span className='resume__experience-position'> front-end developer </span></span>
            </div>
            <span className='resume__experience-descrip'> Work in team with internet-shop project. Remote work.</span>
          </div>
          <div className='resume__experience-item'>
            <div className='resume__experience-item-header'>
              <span className='resume__experience-term'>2021-2022</span>
              <span className='resume__experience-organization'> IT-Agency "Wezom", "Elit-web"  <span className='resume__experience-position'>seo-copywriter</span></span>
            </div>
            <span className='resume__experience-descrip'>Using search engine optimization strategies for writing copy that helps boost a website's search engine ranking. Making content by considering keyword, tone, style, and readability to organically elevate a client website's placement in a search engine result. Creating slogans, text for landing pages, speeches. Remote work.</span>
          </div>
          <div className='resume__experience-item'>
            <div className='resume__experience-item-header'>
              <span className='resume__experience-term'>2021-2022</span>
              <span className='resume__experience-organization'> VFS Global, Poland visa center <span className='resume__experience-position'>
                manager</span></span>
            </div>
            <span className='resume__experience-descrip'> Managing the process of visas getting. Office work. </span>
          </div>
          <div className='resume__experience-item'>
            <div className='resume__experience-item-header'>
              <span className='resume__experience-term'>2011-2018</span>
              <span className='resume__experience-organization'>Raiffeisen Bank, CBO <span className='resume__experience-position'>
                сhief specialist</span></span>
            </div>
            <span className='resume__experience-descrip'>Joining the team of
              quality, control and client's complaints processing. Resolving disputable clients problems, forming officials bank responses, improvementing the process of online mobile banking sales. Active team working.</span>
          </div>
        </div>
        <div className='resume__title'>
          <span className='resume__title-separator' />
          <span className='resume__title-text'> Education </span>
          <span className='resume__title-separator' />
        </div>
        <div className='resume__education'>
          <div className='resume__education-item'>
            <span className='resume__education-degree'>Front-end developer</span>
            <span className='resume__education-school'>Beetroot Academy</span>
            <span className='resume__education-term'>jan. 2022 - jul. 2022</span>
          </div>
          <div className='resume__education-item'>
            <span className='resume__education-degree'>Copywriter</span>
            <span className='resume__education-school'>Wezom Academy</span>
            <span className='resume__education-term'> mar. 2019 - may. 2019</span>
          </div>
          <div className='resume__education-item'>
            <span className='resume__education-degree'>Specialist of economic cybernetic</span>
            <span className='resume__education-school'>Kherson national technical university</span>
            <span className='resume__education-term'> sep. 2008 - jul. 2013</span>
          </div></div> 
        <div className='resume__title'>
          <span className='resume__title-separator' />
          <span className='resume__title-text'> WORK examples </span>
          <span className='resume__title-separator' />
        </div>
        <div className='resume__sub-block'>
          <div className='resume__works'>
            <a className='resume__works-item' target="_blank" rel="noreferrer" href='https://github.com/MargaritaKh0708/Module-2/tree/main/components'>
              <img src={web} alt='works' />
            </a>
            <a className='resume__works-item' target="_blank" rel="noreferrer" href='https://github.com/MargaritaKh0708/Kibernetyky/tree/main/src/components'>
              <img src={web1} alt='works' />
            </a>
            <a className='resume__works-item' target="_blank" rel="noreferrer" href='https://margaritakh0708.github.io/chat/'>
              <img src={web2} alt='works' />
            </a>
          </div>
          <div>
            <span className='resume__works-discription'> Used to implement projects skills: </span>
            <ul className='resume__works-skills'>
              <li className='resume__works-skills-item'> <span class="icon-embed2"></span> React.js, JavaScript</li>
              <li className='resume__works-skills-item'> <span class="icon-embed2"></span> TypeScript</li>
              <li className='resume__works-skills-item'><span class="icon-embed2"></span>  Css, Sass(Scss)</li>
              <li className='resume__works-skills-item'> <span class="icon-embed2"></span>HTML, Pug, BEM</li>
              <li className='resume__works-skills-item'> <span class="icon-embed2"></span>Figma</li>
              <li className='resume__works-skills-item'> <span class="icon-embed2"></span>Swiper, Formik,
                Google Maps API</li>
              <li> <span class="icon-embed2"></span>GitHub, Heroku</li>
              <li> <span class="icon-embed2"></span> VSCode, npm, Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}