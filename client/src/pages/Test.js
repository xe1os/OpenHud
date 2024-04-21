import express from 'express';
import { CSGOGSI } from 'csgogsi';

const app = express();
const GSI = new CSGOGSI();

app.use(express.urlencoded({extended:true}));
app.use(express.raw({limit:'10Mb', type: 'application/json' }));

app.post('/', (req, res) => {
    const text = req.body.toString().replace(/"(player|owner)":([ ]*)([0-9]+)/gm, '"$1": "$3"').replace(/(player|owner):([ ]*)([0-9]+)/gm, '"$1": "$3"');
    const data = JSON.parse(text);
    GSI.digest(data);
    res.sendStatus(200);
});

GSI.on('roundEnd', team => {
    console.log(`Team  ${team.name} win!`);
});
GSI.on('bombPlant', player => {
    console.log(`${player.name} planted the bomb`);
});

app.listen(3001);