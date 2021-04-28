const { app } = require('./core'); 
const { db, update } = require('./db')

/* CODE YOUR API HERE */

////////////////////// Vacuum///////////////////

/* Slå på vakuumet (eller vilken enhet du än väljer) med webbadressen: 
localhost: 3001 / vakuum (enhetsnamn du väljer) / on.
 */
app.put('/vacuum/on', (req, res) => {
        
    db
    .get('devices')
    .find({ id : "VAC1" })// Jag hittar rätt objekt med min .find-metod och matchar det vid värdet inuti nyckel-id.
    .assign({ on : true }) // Jag ändrar värdet 'on' key från false till true.
    .value();// .value se till att jag får rätt datatyp.

    update(); // update () ser till frontend att uppdatera tillståndet.
    res.end('damnsugare är på') //ends of function 

})
/* Stäng av vakuumet (eller vilken enhet du än väljer) med webbadressen: 
localhost: 3001 / vakuum (enhetsnamn du väljer) / off. */
app.put('/vacuum/off', (req, res) => {

    db
    .get('devices')
    .find({ id : "VAC1" })
    .assign({ on : false }) 
    .value();
    
    update(); 
    res.end('damnsugare är avstängd')
    
    })

///////////////////// Lightright///////////////////

app.put('/lightleft/on', (req, res) => {    
        
    db
    .get('devices')
    .find({ id : "LIG1" })
    .assign({ on : true, color: '#FAEBD7'}) 
    .value();
    
    update(); 
    res.end('vänstra lampan är tänds')
    
    })
    
app.put('/lightleft/off', (req, res) => {
    
    db
    .get('devices')
    .find({ id : "LIG1" })
    .assign({ on : false }) 
    .value();
        
    update(); 
    res.end('vänstra lampan är släckt')
        
    })
///////////////////// Lightmiddle///////////////////
    app.put('/lightmiddle/on', (req, res) => {
        
    db
    .get('devices')
    .find({ id : "LIG2" })
    .assign({ on : true, color: '#FF7F50' }) 
    .value();
        
    update(); 
    res.end('mitten lampan är tänds')
        
    })
app.put('/lightmiddle/off', (req, res) => {
    
    db
    .get('devices')
    .find({ id : "LIG2" })
    .assign({ on : false }) 
    .value();
        
    update(); 
    res.end('mitten lampan är släckt')
        
    })
///////////////////// Lightleft///////////////////
    app.put('/lightright/on', (req, res) => {
        
    db
    .get('devices')
    .find({ id : "LIG3" })
    .assign({ on : true , color: '#7FFF00'}) 
    .value();
        
    update(); 
    res.end('högra lampan är tänds')
        
    })
app.put('/lightright/off', (req, res) => {
    
    db
    .get('devices')
    .find({ id : "LIG3" })
    .assign({ on : false }) 
    .value();
        
    update(); 
    res.end('högra lampan är släcks')
        
    })
///////////////////// Lightblind///////////////////
app.put('/blind/on', (req, res) => {
        
    db
    .get('devices')
    .find({ id : "BLI1" })
    .assign({ on : true }) 
    .value();
        
    update(); 
    res.end('gardinen är nere')
        
    })
app.put('/blind/off', (req, res) => {
    
    db
    .get('devices')
    .find({ id : "BLI1" })
    .assign({ on : false }) 
    .value();
        
    update(); 
    res.end('gardinen är uppe')
        
    })
///////////////////// AC ///////////////////////
    app.put('/ac/on', (req, res) => {
        
    db
    .get('devices')
    .find({ id : "AC1" })
    .assign({ on : true }) 
    .value();
        
    update(); 
    res.end('AC är på')
        
    })
app.put('/ac/off', (req, res) => {
    
    db
    .get('devices')
    .find({ id : "AC1" })
    .assign({ on : false }) 
    .value();
        
    update(); 
    res.send('AC är avstängt')
        
    })
///////////////////// Door ///////////////////

// Lås upp ytterdörren med url: localhost: 3001 / door / open.

    app.put('/door/open', (req, res) => {
        
    db
    .get('devices')
    .find({ id : "LOC1" })// Jag hittar rätt objekt med min .find-metod och matchar det vid värdet inuti nyckel-id.
    .assign({ locked : true }) // Jag ändrar värdet i min 'locked' key från false till true.
    .value();//.value se till att jag får rätt datatyp.
        
    update(); // update () ser till frontend att uppdatera tillståndet.
    res.end('dörren är öppet') // res.end() ends the function. 

    })
    app.put('/door/closed', (req, res) => {
    
    db
    .get('devices')
    .find({ id : "LOC1" })
    .assign({ locked : false }) 
    .value();
            
    update(); 
    res.end('dörren är låst')
            
    })
///////////////////// Camera ///////////////////

    app.put('/camera/on', (req, res) => {
        
    db
    .get('devices')
    .find({ id : "CAM1" })
    .assign({ on : true }) 
    .value();
        
    update(); 
    res.end('ytterdörren kamare är på')

    })
    app.put('/camera/off', (req, res) => {
    
    db
    .get('devices')
    .find({ id : "CAM1" })
    .assign({ on : false }) 
    .value();
            
    update(); 
    res.send('yttergörren kamare är avstängt')
            
    })

  ///////////////////// Speaker ///////////////////
    app.put('/speaker/on', (req, res) => {
        
    db
    .get('devices')
    .find({ id : "SPE1" })
    .assign({ on : true }) 
    .value();
        
    update(); 
    res.end('högtalare är på')

    })
    app.put('/speaker/off', (req, res) => {
    
    db
    .get('devices')
    .find({ id : "SPE1" })
    .assign({ on : false }) 
    .value();
            
    update(); 
    res.end('högtalare är avstängt')
            
    })
        
       
app.listen(3000, () => {
    console.log('API for smart home 1.1 up n running.')
})

