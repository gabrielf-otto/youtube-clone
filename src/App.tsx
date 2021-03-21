import React, { useState, useEffect } from 'react';
import ThemeContainer from './contexts/theme/ThemeContainer';

import logoLight from './assets/logoLight.png';
import logoDark from './assets/logoDark.png';
import api from './services/api';

import { 
	Box,
	Grid,
	Button,  
	Toolbar, 
	IconButton, 
	Typography, 
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
	List,
	AppBar,
	Drawer,
	ListSubheader,
	TextField,
	ThemeOptions,
	InputBase
} from '@material-ui/core';

import { 
	AccountCircle, 
	Announcement, 
	Apps, 
	Directions, 
	Games, 
	Highlight, 
	Home, 
	LiveTv, 
	MoreVert, 
	PlayCircleFilled, 
	Restore, 
	Search, 
	SportsBasketball, 
	Subscriptions, 
	Theaters, 
	VideoCall, 
	VideoLibrary, 
	Whatshot 
} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './App.styles';
import { useTheme } from '@material-ui/core';


interface IVideoData {
	id: number;
	title: string;
	channel: string;
	views: string;
	date: string;
	avatar_url: string;
	thumb_url: string;
}

const App: React.FC = () => {
	const [videos, setVideos] = useState<IVideoData[]>([]);
	const classes = useStyles();
	const theme = useTheme();


	useEffect(() => {
		api.get('/videos').then(response => {
			setVideos(response.data);
		});
	},
	[]);

	return (
		<ThemeContainer>
			<AppBar color="inherit" className={classes.appBar}>
				<Toolbar>
					<Box 
						display="flex" 
						justifyContent="space-between" 
						flexGrow={1}
					>
						<Box 
							display="flex" 
							alignItems="center"
						>
							<IconButton edge="start" color="inherit" aria-label="menu">
								<MenuIcon/>
							</IconButton>
							
							<img 
								src={theme.palette.type === 'dark'? logoLight: logoDark} 
								alt="Youtube" 
								width={80}
								style={{marginLeft: '16px'}}
							/>
						</Box>
						<Box display="flex" alignItems="center">
							<InputBase 
								placeholder="Pesquisa"
								className={classes.searchInput}
							/>
							<IconButton color="primary" className={classes.searchButtonIcon}>
								<Search />
							</IconButton>

						</Box>
						<Box>
							<IconButton><VideoCall /></IconButton>
							<IconButton><Apps/></IconButton>
							<IconButton><MoreVert /></IconButton>
							<Button 
								color="secondary" 
								variant="outlined" 
								startIcon={<AccountCircle />} 
								style={{marginLeft: '10px'}}
							>
								Fazer Login
							</Button>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>

			<Box display="flex">
				<Drawer variant="permanent" className={classes.drawer} classes={{paper: classes.drawerPaper}}>
					<Toolbar />
					<Box>
						<List>
							<ListItem button classes={{root: classes.listItem}}>
								<ListItemIcon>
									<Home />
								</ListItemIcon>
								<ListItemText primary="Início" classes={{
									primary: classes.listItemText
								}}/>
							</ListItem>
							<ListItem button classes={{root: classes.listItem}}>
								<ListItemIcon>
									<Whatshot />
								</ListItemIcon>
								<ListItemText primary="Em alta" classes={{
									primary: classes.listItemText
								}}/>
							</ListItem>
							<ListItem button classes={{root: classes.listItem}}>
								<ListItemIcon>
									<Subscriptions />
								</ListItemIcon>
								<ListItemText primary="Inscrições" classes={{
									primary: classes.listItemText
								}}/>
							</ListItem>
						</List>
						<Divider />
						<List>
							<ListItem button classes={{root: classes.listItem}}>
								<ListItemIcon>
									<VideoLibrary />
								</ListItemIcon>
								<ListItemText primary="Biblioteca" classes={{
									primary: classes.listItemText
								}}/>
							</ListItem>
							<ListItem button classes={{root: classes.listItem}}>
								<ListItemIcon>
									<Restore />
								</ListItemIcon>
								<ListItemText primary="Histórico" classes={{
									primary: classes.listItemText
								}}/>
							</ListItem>
						</List>
						<Divider />
						<Box display="flex" flexDirection="column" p={4}>
							<Typography variant="body1">
								Faça login para curtir vídeos, comentar e se inscrever.
							</Typography>
							<Button 
								color="secondary" 
								variant="outlined" 
								startIcon={<AccountCircle />} 
								style={{marginTop: '10px'}}
							>
								Fazer Login
							</Button>
						</Box>
						<Divider />
						<List subheader={
							<ListSubheader>
								O MELHOR DO YOUTUBE
							</ListSubheader>
						}>
							<ListItem button classes={{root: classes.listItem}}>
								<ListItemIcon>
									<PlayCircleFilled/>
								</ListItemIcon>
								<ListItemText primary="Música" classes={{
									primary: classes.listItemText
								}}/>
							</ListItem>
							<ListItem button classes={{root: classes.listItem}}>
								<ListItemIcon>
									<SportsBasketball />
								</ListItemIcon>
								<ListItemText primary="Esportes" classes={{
									primary: classes.listItemText
								}}/>
							</ListItem>
							<ListItem button classes={{root: classes.listItem}}>
								<ListItemIcon>
									<Games />
								</ListItemIcon>
								<ListItemText primary="Jogos" classes={{
									primary: classes.listItemText
								}}/>
							</ListItem>
							<ListItem button classes={{root: classes.listItem}}>
								<ListItemIcon>
									<Theaters />
								</ListItemIcon>
								<ListItemText primary="Filmes" classes={{
									primary: classes.listItemText
								}}/>
							</ListItem>
							<ListItem button classes={{root: classes.listItem}}>
								<ListItemIcon>
									<Announcement />
								</ListItemIcon>
								<ListItemText primary="Notícias" classes={{
									primary: classes.listItemText
								}}/>
							</ListItem>
							<ListItem button classes={{root: classes.listItem}}>
								<ListItemIcon>
									<Highlight />
								</ListItemIcon>
								<ListItemText primary="Destaque" classes={{
									primary: classes.listItemText
								}}/>
							</ListItem>
							<ListItem button classes={{root: classes.listItem}}>
								<ListItemIcon>
									<LiveTv />
								</ListItemIcon>
								<ListItemText primary="Ao vivo" classes={{
									primary: classes.listItemText
								}}/>
							</ListItem>
						</List>
					</Box>
				</Drawer>
				
				<Box p={6}>
					<Toolbar />
					<Typography variant="h6">Recomendados</Typography>

					<Grid container spacing={2} style={{marginTop: 20}}>
						{ videos.map(video => (
							<Grid key={video.id} item lg={3} xs={12}>
								<Box>
									<img 
										src={video.thumb_url} 
										alt={video.title}
										width={'100%'}
									/>
									<Box display="flex" justifyContent="flex-start" mt={1}>
										<img 
											src={video.avatar_url} 
											alt=""
											style={{
												width: 36, 
												height: 36, 
												borderRadius: '50%',
												marginRight: 10
											}}
										/>
										<Box display="flex" flexDirection="column">
											<Typography variant="body1" className={classes.videoTitle}>
												{video.title}
											</Typography>
											<Typography variant="body2" className={classes.videoChannel}>
												{video.channel}
											</Typography>
											<Typography variant="body2" className={classes.videoInfo}>
												{`${video.views} • ${video.date}`}
											</Typography>
										</Box>
									</Box>
								</Box>
							</Grid>
						)) }
					</Grid>
				</Box>
			</Box>
		
		</ThemeContainer>
	);
}


export default App;
