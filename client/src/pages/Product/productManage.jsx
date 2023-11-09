import { IMAGES } from "../../assets";

export const WoodyProduct = {
    brand: 'A.N. OTHER',
    price: '$15 - $80',
    optionName: 'Size:',
    content:  
    <>
            <p style={{paddingTop: '20px', color: 'rgb(149, 149, 149)'}}>Created to fully harness the power of the olfactory senses, this perfume utilizes the tranquil and nourishing qualities of sandalwood to enhance concentration and awaken intuition. An infusion of lush, effervescent pear at the top adds a distinct uplifting quality and an unmistakably modern appeal.</p>
            <div style={{paddingTop: '20px', color: 'rgb(149, 149, 149)'}}>
                <strong>Top: </strong><span>Pear Sparkle / Cardamom Spice / Violet Leaves</span>
                <br/>
                <strong>Heart: </strong><span>Rich Orris / Cypress / Amyris</span>
                <br/>
                <strong>Base: </strong><span>Sandalwood / Blonde Cedar / Vetiver Madagascar</span>
                <br/>
            </div>
            <p style={{paddingTop: '20px', color: 'rgb(149, 149, 149)'}}>Read more about the Perfumer who created this scent here.</p>
            <p style={{paddingTop: '20px', color: 'rgb(149, 149, 149)'}}>This is a demo store. You can purchase products like this from <a href={'https://an-other.com/'}>A.N. OTHER.</a></p>
        </>,
    type: [{
        name:'Woody 100ml',
        image: [IMAGES.Woody100ml, IMAGES.Woody50ml, IMAGES.Woody7dot5ml],
        price: ['$80.00','$75.00','$15.00'],
        optionItems: ['100ml', '50ml', '7.5ml'],
    },
    {
        name:'Woody 50ml',
        image: [IMAGES.Woody50ml, IMAGES.Woody100ml, IMAGES.Woody7dot5ml],
        price: ['$75.00','$80.00','$15.00'],
        optionItems: ['50ml', '100ml', '7.5ml',],
    },
    {
        name:'Woody 7.5ml',
        image: [IMAGES.Woody7dot5ml, IMAGES.Woody50ml, IMAGES.Woody100ml],
        price: ['$15.00','$75.00','$80.00'],
        optionItems: ['7.5ml', '50ml', '100ml', ],
    }],
}


export const FreshProduct = {
    brand: 'A.N. OTHER',
    price: '$25 - $95',
    optionName: 'Size:',
    content: 
    <>
            <p style={{paddingTop: '20px', color: 'rgb(149, 149, 149)'}}>Drawing inspiration from the resurgence of classic gin cocktails, aldehydic top notes shake this clean blend of crisp juniper and Madagascan ginger alive with a freshness that fizzes and excites the senses. Metallic musk unifies a perfectly mixed blend, enhancing each note and completing the composition.</p>
            <div style={{paddingTop: '20px', color: 'rgb(149, 149, 149)'}}>
                <strong>Top: </strong><span>Melon Pop Rocks / Grapefruit Zest / Gin & Tonic</span>
                <br/>
                <strong>Heart: </strong><span>Juniper / Madagascar Ginger / Aromatic Lavender</span>
                <br/>
                <strong>Base: </strong><span>Chilled Amberwood / Metallic Musk</span>
                <br/>
            </div>
            <p style={{paddingTop: '20px', color: 'rgb(149, 149, 149)'}}>Read more about the Perfumer who created this scent here.</p>
            <p style={{paddingTop: '20px', color: 'rgb(149, 149, 149)'}}>This is a demo store. You can purchase products like this from <a href={'https://an-other.com/'}>A.N. OTHER.</a></p>
            </>,
    type:[ {
        name:'Fresh 100ml',
        image: [IMAGES.Fresh100ml, IMAGES.Fresh50ml, IMAGES.Fresh7dot5ml,],
        price: ['$95.00', '$75.00', '$25.00'], 
        optionItems: ['100ml', '50ml', '7.5ml'],
    },
    {
        name:'Fresh 50ml',
        image: [IMAGES.Fresh50ml,IMAGES.Fresh100ml,IMAGES.Fresh7dot5ml,],
        price: ['$75.00','$95.00','$25.00',],
        optionItems: ['50ml', '100ml', '7.5ml',],
    },
    {
        name:'Fresh 7.5ml',
        image: [IMAGES.Fresh7dot5ml,IMAGES.Fresh50ml,IMAGES.Fresh100ml],
        price: ['$25.00','$75.00','$95.00',],
        optionItems: ['7.5ml', '50ml', '100ml', ],
    },]
}

export const FloralProduct = {
    brand: 'A.N. OTHER',
    price: '$25 - $95',
    optionName: 'Size:',
    content: 
    <>
            <p style={{paddingTop: '20px', color: 'rgb(149, 149, 149)'}}>This complex, yet playful exploration of light and dark textures brings a modern twist to classic perfumery notes. A rich base of sumptuous dark leather is punctuated by the elegance of night blooming jasmine. Nostalgic notes of sweet cotton candy and herbal mate add a contemporary lightness to the perfume. Hidden notes that emerge as the fragrance dries down surprise you when you think you really know it.</p>
            <div style={{paddingTop: '20px', color: 'rgb(149, 149, 149)'}}>
                <strong>Top: </strong><span>Cotton Candy / Elemi / Saffron</span>
                <br/>
                <strong>Heart: </strong><span>Brazilian Mate / Night Blooming Jasmine / Ambrette</span>
                <br/>
                <strong>Base: </strong><span>Aged Leather / Cashmere Musk / Labdanum / Amberwood</span>
                <br/>
            </div>
            <p style={{paddingTop: '20px', color: 'rgb(149, 149, 149)'}}>Read more about the Perfumer who created this scent here.</p>
            <p style={{paddingTop: '20px', color: 'rgb(149, 149, 149)'}}>This is a demo store. You can purchase products like this from <a href={'https://an-other.com/'}>A.N. OTHER.</a></p>
            </>,
    type: [{
        name:'Floral 100ml',
        image: [IMAGES.Floral100ml,IMAGES.Floral50ml,IMAGES.Floral7dot5ml,],
        price: ['$95.00','$75.00','$25.00',],
        optionItems: ['100ml', '50ml', '7.5ml'],
    },
    {
        name:'Floral 50ml',
        image: [IMAGES.Floral50ml,IMAGES.Floral100ml,IMAGES.Floral7dot5ml,],
        price: ['$75.00','$95.00','$25.00',],
        optionItems: ['50ml', '100ml', '7.5ml',],
    },
    {
        name:'Floral 7.5ml',
        image: [IMAGES.Floral7dot5ml,IMAGES.Floral50ml,IMAGES.Floral100ml,],
        price: ['$25.00','$75.00','$95.00',],
        optionItems: ['7.5ml', '50ml', '100ml', ],
    },]
}
