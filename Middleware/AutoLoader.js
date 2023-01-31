/**
 * Automatisk require af routes
 * Alle nødvendige routes bør ligge i en undermappe (api, admin, auth)
 */
import fs from 'fs'
import path from 'path'
 
const AutoLoader = startdir => {
	fs.readdirSync(startdir, {
		widthFileTypes: true
	}).forEach(dir => {
		if(dir.substring(0,1) != '_') {
			const fileParts = dir.split('.');
			const fsName = CapitalizeStr(fileParts[0]) + CapitalizeStr(fileParts[1])
			console.log(fsName);
			try {
				const fsName = require(dir);
			} catch (error) {
				console.error(error);
			}
		}
	})
}

const CapitalizeStr = str => {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export default AutoLoader

/*
 module.exports = (app) => {
	//console.log(app);
	//Looper routes dir
	fs.readdirSync(__dirname, {
		withFileTypes: true
	}).forEach(dir => {
		let curpath = path.join(__dirname, dir.name);
		let stat = fs.statSync(curpath);
		if(stat.isDirectory()) {
			console.log(stat);
		}
	})
}
*/