import React, { useState } from 'react';
import ParticlesBg from "particles-bg";
import './App.css';
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import TextLoop from "react-text-loop";
import Typist from 'react-typist';

function App() {
	const config_cursor = {
		show: true,
		blink: true,
		element:'✍️',
		hideWhenDone: true,
	}

	const [darkmode, setdarkmode] = useState(false);

	return (
		<div>
			<div className={`card ${darkmode ? 'dark' : ''}`}>
				<div className="toggle-btn" onClick={() => setdarkmode(!darkmode)}></div>
				<div className="dark-mode"></div>
				<div className="card_body">
					<div className="profile text-center ">
						<img src="https://i.postimg.cc/zG5Ld8vB/IMG-20220206-130400.jpg" className="avatar" alt="avatar" />
						<div className="bg_content rd_12 p_8">
							<h1>Mertin Fitri Yanti</h1>
							<p className='mt-16'>Student | Gamer | Creator</p>
							<Typist cursor={config_cursor}>
								Jangan Takut Memulai Sesuatu:v
							</Typist>
						</div>

						<div className="bg_content rd_12 p_8 mt-16">
							Hobby{' '}
							<TextLoop interval={800}>
								<span className='higthlight'>Game</span>
								<span className='higthlight'>Traveling</span>
								<span className='higthlight'>Film</span>
								<span className='higthlight'>Study</span>
								<span className='higthlight'>Gabut</span>
								<span className='higthlight'>Rebahan😅</span>
								<span className='higthlight'>Thank You</span>
							</TextLoop>
						</div>
					</div>
					<div className="mt-16">
						<a className="btn_action bg_content" href="https://www.instagram.com/piggydaisyy/?utm_medium=copy_link">
							<BsInstagram />
							<span>Instagram</span>
						</a>
					</div>
					<div className="mt-16">
						<a className="btn_action bg_content" href="https://vt.tiktok.com/ZSeVr1Eg7/">
							<FaTiktok />
							<span>Tiktok</span>
						</a>
					</div>
					<div className="mt-16">
						<a className="btn_action bg_content" href="/some-url">
							<FiYoutube />
							<span>Coming Soon</span>
						</a>
					</div>

				</div>
			</div>
			<ParticlesBg type="thick" bg={true} />
		</div>
	);
}

export default App;
