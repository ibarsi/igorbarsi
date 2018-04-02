import React from 'react';
import { Helmet } from 'react-helmet';

import './index.css';

const IndexPage = () => <div>
    <Helmet>
        <link rel="stylesheet" href="//assets.juicer.io/embed.css" media="all" type="text/css" />
        <script type="text/javascript" src="//assets.juicer.io/embed.js"></script>
    </Helmet>

    <header>
        <h1 className='title'>
            { 'Hi, I\'m Igor Barsi 👋🏼' }
        </h1>
    </header>

    <div className='content-container'>
        <hr />

        <p className='paragraph'>
            {'I’m a software developer and writer focused on effective engineering and leadership. My writing combines personal experiences with ideas across disciplines, such as behavioural psychology, philosophy, engineering, neuroscience and more. My goal is to share lessons and concepts that focus on the “soft” side of what we do to build routines and practices that ultimately shape our life and work.'}
        </p>

        <p className='paragraph'>
            {'Much of my writing consists of opinion posts and think pieces targeted at engineers, however the core concepts are far reaching and applicable to many disciplines. I don’t have all the answers, but I’m happy to share what I have learned in hopes that my thoughts and experiences might leave a positive impact.'}
        </p>
    </div>

    <ul className='clearfix social__list'>
        <li className='social__list-item'>
            <a href='http://stackoverflow.com/story/igor-barsi' title='Igor Barsi - StackOverflow Story' target='blank'>
                <svg className='social__icon' version='1.1' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
                    <path d='M6.080 23.835v5.32h16.767v-10.673l-0.871 0.097-0.903 0.097-0.097 4.417-0.097 4.45h-13.188v-9.028h-1.612v5.32zM8.982 24.641v0.967h10.318v-1.935h-10.318v0.967zM9.137 20.832l-0.105 0.962 10.257 1.118 0.21-1.923-10.257-1.118-0.105 0.962zM9.908 16.282l-0.251 0.934 9.965 2.676 0.502-1.868-9.965-2.676-0.251 0.934zM12.024 10.978l-0.515 0.819 8.734 5.494 1.030-1.638-8.734-5.494-0.515 0.819zM16.965 6.038l-0.797 0.549 5.853 8.498 1.593-1.097-5.853-8.498-0.797 0.549zM23.413 3.549l-0.951 0.177 1.893 10.143 1.902-0.355-1.892-10.143-0.951 0.177z' />
                </svg>
            </a>
        </li>
        <li className='social__list-item'>
            <a href='https://github.com/ibarsi' title='Igor Barsi - GitHub' target='blank'>
                <svg className='social__icon' version='1.1' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
                    <path d='M16 5.343c-6.196 0-11.219 5.023-11.219 11.219 0 4.957 3.214 9.162 7.673 10.645 0.561 0.103 0.766-0.244 0.766-0.54 0-0.267-0.010-1.152-0.016-2.088-3.12 0.678-3.779-1.323-3.779-1.323-0.511-1.296-1.246-1.641-1.246-1.641-1.020-0.696 0.077-0.682 0.077-0.682 1.126 0.078 1.72 1.156 1.72 1.156 1.001 1.715 2.627 1.219 3.265 0.931 0.102-0.723 0.392-1.219 0.712-1.498-2.49-0.283-5.11-1.246-5.11-5.545 0-1.226 0.438-2.225 1.154-3.011-0.114-0.285-0.501-1.426 0.111-2.97 0 0 0.941-0.301 3.085 1.15 0.894-0.25 1.854-0.373 2.807-0.377 0.953 0.004 1.913 0.129 2.809 0.379 2.14-1.453 3.083-1.15 3.083-1.15 0.613 1.545 0.227 2.685 0.112 2.969 0.719 0.785 1.153 1.785 1.153 3.011 0 4.31-2.624 5.259-5.123 5.537 0.404 0.348 0.761 1.030 0.761 2.076 0 1.5-0.015 2.709-0.015 3.079 0 0.299 0.204 0.648 0.772 0.538 4.455-1.486 7.666-5.69 7.666-10.645 0-6.195-5.023-11.219-11.219-11.219z' />
                </svg>
            </a>
        </li>
        <li className='social__list-item'>
            <a href='https://twitter.com/igorbarsi' title='Igor Barsi - Twitter' target='blank'>
                <svg className='social__icon social__icon--twitter' version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 612 612' xmlSpace='preserve'>
                    <g>
                        <g>
                            <path d='M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411
                                c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513
                                c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101
                                c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104
                                c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194
                                c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485
                                c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z' />
                        </g>
                    </g>
                </svg>
            </a>
        </li>
        <li className='social__list-item'>
            <a href='https://medium.com/@igorbarsi' title='Igor Barsi - Medium' target='blank'>
                <svg className='social__icon social__icon--medium' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='50' height='50' viewBox='0 0 50 50'>
                    <g id='surface1'>
                        <path d='M 18 41.578125 C 18 42.46875 17.523438 43 16.847656 43 C 16.609375 43 16.34375 42.933594 16.0625 42.792969 L 5.164063 37.273438 C 4.523438 36.949219 4 36.089844 4 35.367188 L 4 8.3125 C 4 7.597656 4.378906 7.175781 4.921875 7.175781 C 5.113281 7.175781 5.328125 7.226563 5.550781 7.339844 L 5.933594 7.535156 C 5.933594 7.535156 5.9375 7.535156 5.9375 7.535156 L 17.949219 13.617188 C 17.96875 13.628906 17.984375 13.648438 18 13.664063 Z M 30.585938 8.882813 L 31.320313 7.675781 C 31.582031 7.246094 32.0625 7 32.550781 7 C 32.664063 7 32.78125 7.015625 32.894531 7.046875 C 32.980469 7.066406 33.070313 7.097656 33.164063 7.144531 L 45.832031 13.558594 C 45.835938 13.558594 45.835938 13.5625 45.835938 13.5625 L 45.847656 13.566406 C 45.855469 13.570313 45.855469 13.582031 45.863281 13.585938 C 45.925781 13.636719 45.953125 13.722656 45.910156 13.792969 L 33.292969 34.558594 L 32.003906 36.675781 L 23.644531 20.304688 Z M 20 30.605469 L 20 17.5625 L 28.980469 35.15625 L 20.902344 31.066406 Z M 46 41.578125 C 46 42.414063 45.503906 42.890625 44.773438 42.890625 C 44.445313 42.890625 44.070313 42.796875 43.675781 42.597656 L 41.867188 41.679688 L 33.789063 37.589844 L 46 17.496094 Z '></path>
                    </g>
                </svg>
            </a>
        </li>
        <li className='social__list-item'>
            <a href='https://www.linkedin.com/in/ibarsi/' title='Igor Barsi - LinkedIn' target='blank'>
                <svg className='social__icon social__icon--linkedin' version='1.1' xmlns='http://www.w3.org/2000/svg' width='430.117px' height='430.117px' viewBox='0 0 430.117 430.117' xmlSpace='preserve'>
                    <g>
                        <path d='M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707
                            c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21
                            v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824
                            C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463
                            c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z
                            M5.477,420.56h92.184v-277.32H5.477V420.56z' />
                    </g>
                </svg>
            </a>
        </li>
    </ul>

    <ul className='juicer-feed' data-feed-id='igorbarsi'>
        <h1 className='referral'>
            <a href='https://www.juicer.io'>
                Powered by Juicer
            </a>
        </h1>
    </ul>
</div>;

export default IndexPage;
