import { createServer } from 'node:http';

const app = createServer( async (req, res) => { 
    res.write('fuck off');
    res.end();
});

app.listen(3000, () => console.log('Listening'));
