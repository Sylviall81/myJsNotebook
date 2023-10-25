// 1. 'agenda' es un array que contiene un objeto categorias con un array de 'contactos' 

const agenda = [
   {  
      categoria: 'Emergencias', // agenda[0]
         contactos: [
            {  // agenda[0].contactos[0]
               contacto: 'Emergencias todo tipo',  // agenda[0].contactos[0].contacto
               numeroTelefono: '112',              // agenda[0].contactos[0].numeroTelefono
               web: 'http://www.112.es/'           // agenda[0].contactos[0].web                
            }, 
            {  // agenda[0].contactos[1]
               contacto: 'Policía',
               numeroTelefono: '091',
               web: 'http://www.policia.es/' 
            }, 
            {  
               contacto: 'Bomberos',
               numeroTelefono: '934027000',
               web: 'https://ajuntament.barcelona.cat/bombers/es' 
            },
            {  
               contacto: 'Emergencias Médicas',
               numeroTelefono: '061',
               web: 'https://sem.gencat.cat/ca/061-salut-respon/' 
            },
            {  
               contacto: 'Cruz Roja',
               numeroTelefono: '901 222 222',
               web: 'http://www.cruzroja.es/portada/' 
            }, 
         ]
   },
   {      
      categoria: 'Tarjetas de Crédito (cancelación)', // agenda[1]
         contactos: [
            {  
               contacto: 'Visa', // agenda[1].contactos[0]
               numeroTelefono: '900 991 124',
               web: 'https://www.visa.es/' 
            },  
            {  
               contacto: 'American Express', // agenda[1].contactos[1]
               numeroTelefono: '900 814 500',
               web: 'https://www.americanexpress.com/es-es/' 
            },
            {  
               contacto: 'Mastercard',
               numeroTelefono: '900 971 231',
               web: 'https://www.mastercard.es/es-es.html' 
            },
         ]
   },
]; 

