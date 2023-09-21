//creating collection  maybe not the best way but it works
const container = document.querySelector("#objectList");
const collection = [

    {
        Serial:"A-1-1",
        name:"Xeno-Lord",
        illustration:"https://th.bing.com/th/id/OIG.ARfFgyvEMswOtr6XA3gX?pid=ImgGn",
        Type:"Alien",
        Power:"Psychic Blast",
        Attack:120,
        Defense:80,
        Description:"Xeno-Lord is an extraterrestrial lord with a powerful Psychic Blast. He commands a formidable alien army.",
        Color:"#34eb34",
        },
        

        {
            Serial:"A-1-2",
            name:"Alien Grunt",
            illustration:"https://th.bing.com/th/id/OIG.RUAcNK8n_QIw3WxeP0y2?pid=ImgGn",
            Type:"Alien",
            Power:"Plasma Bolt",
            Attack:70,
            Defense:60,
            Description:"Alien Grunts are extraterrestrial infantry soldiers armed with Plasma Bolts for close combat.",
            Color:"#34eb35",
            },
            

            {
                Serial:"A-1-3",
                name:"Starlight Serpent",
                illustration:"https://th.bing.com/th/id/OIG.93iQKy0I5rpPYtNrln_2?pid=ImgGn&rs=1",
                Type:"Alien",
                Power:"Cosmic Coil",
                Attack:95,
                Defense:75,
                Description:"The Starlight Serpent is an agile extraterrestrial creature capable of launching energy Cosmic Coils.",
                Color:"#34eb36",
                },
                

{
Serial:"CC_04",
name:"Nebula Navigators",
illustration:"https://th.bing.com/th/id/OIG.Rgo11WuO2_iPBjC4mrp2?pid=ImgGn",
Type:"Alien",
Power:"Space Warp",
Attack:85,
Defense:90,
Description:"Nebula Navigators are extraterrestrials skilled in space-time manipulation through their Space Warp ability.",
Color:"#34eb37",
    },
    
{
Serial: "CC_05",
name: "Celestial Mindmaster",
illustration: "https://th.bing.com/th/id/OIG.twIuv8BRx9ihV7TMKzkA?pid=ImgGn",
Type: "Alien",
Power: "Psionic Control",
Attack: 110,
Defense: 70,
Description: "The Celestial Mindmaster can control the minds of its enemies with its Psionic Control power.",
Color: "#34eb38",
},

{
Serial: "CC_06",
name: "Galactic Empress",
illustration: "https://th.bing.com/th/id/OIG.LZhbcjeQUgc9NmSOmco_?pid=ImgGn",
Type: "Alien",
Power: "Stellar Dominion",
Attack: 130,
Defense: 100,
Description: "The Galactic Empress is the supreme ruler of the extraterrestrial empire with the power of Stellar Dominion.",
Color: "#34eb39",
},

{
Serial: "CC_07",
name: "Cosmic Observer",
illustration: "https://th.bing.com/th/id/OIG.drujjqDZ.ASRqDhrleXF?pid=ImgGn",
Type: "Alien",
Power: "Astral Vision",
Attack: 80,
Defense: 95,
Description: "The Cosmic Observer can see through dimensions with its Astral Vision.",
Color: "#34eb40",
},

{
Serial: "CC_08",
name: "Void Traveler",
illustration: "https://th.bing.com/th/id/OIG.BUkstvRaC__cS49vlpA6?pid=ImgGn",
Type: "Alien",
Power: "Interdimensional Rift",
Attack: 100,
Defense: 85,
Description: "The Void Traveler can open interdimensional rifts with its Interdimensional Rift ability.",
Color: "#34eb41",
},

{
Serial: "CC_09",
name: "Nebula Nomad",
illustration: "https://th.bing.com/th/id/OIG.TR9.ggsS6MiJe1YwjFlg?pid=ImgGn",
Type: "Alien",
Power: "Cosmic Drift",
Attack: 75,
Defense: 105,
Description: "The Nebula Nomad roams the universe thanks to its Cosmic Drift power.",
Color: "#34eb42",
},

{
Serial: "CC_10",
name: "Solar Sentinel",
illustration: "https://th.bing.com/th/id/OIG.wzlfgE6T_PlRYiPZGxmU?pid=ImgGn",
Type: "Alien",
Power: "Solar Flare",
Attack: 115,
Defense: 90,
Description: "The Solar Sentinel protects the stars with its Solar Flare ability.",
Color: "#34eb43",
},

{
Serial: "CC_11",
name: "Interstellar Diplomat",
illustration: "https://th.bing.com/th/id/OIG.dKY0mcK1LuXntdmKmkqz?pid=ImgGn",
Type: "Alien",
Power: "Telepathic Negotiation",
Attack: 90,
Defense: 100,
Description: "The Interstellar Diplomat resolves conflicts through telepathic negotiation.",
Color: "#34eb44",
},

{
Serial: "CC_12",
name: "Quantum Explorer",
illustration: "https://th.bing.com/th/id/OIG.3gE8MtLuk7VS3rzxu1AJ?pid=ImgGn",
Type: "Alien",
Power: "Quantum Leap",
Attack: 105,
Defense: 95,
Description: "The Quantum Explorer explores alternative realities with its Quantum Leap ability.",
Color: "#34eb45",
},

{
Serial: "CC_13",
name: "Robotron",
illustration: "https://th.bing.com/th/id/OIG.Yu9X_6v33SX0HnhZm_vq?pid=ImgGn",
Type: "Robot",
Power: "Laser Beam",
Attack: 90,
Defense: 60,
Description: "Robotron is a powerful futuristic combat robot equipped with a high-tech Laser Beam.",
Color: "#f70202",
},

{
Serial: "CC_14",
name: "Mech-X",
illustration: "https://th.bing.com/th/id/OIG.hKRXuwh9TUXB59pwMA.0?pid=ImgGn",
Type: "Robot",
Power: "Plasma Cannon",
Attack: 100,
Defense: 70,
Description: "Mech-X is a giant mecha armed with a Plasma Cannon, used for large-scale combat operations.",
Color: "#f70203",
},

{
Serial: "CC_15",
name: "Titan-Z",
illustration: "https://th.bing.com/th/id/OIG.wLacKtccOJ6iltoOcZk9?pid=ImgGn",
Type: "Robot",
Power: "Rocket Punch",
Attack: 110,
Defense: 75,
Description: "Titan-Z is a mechanical titan capable of deploying a devastating Rocket Punch to crush its enemies.",
Color: "#f70204",
},

{
Serial: "CC_16",
name: "Cyber-Warrior",
illustration: "https://th.bing.com/th/id/OIG.ZxdIa3XVe3F1mT0U6Lbi?pid=ImgGn",
Type: "Robot",
Power: "Energy Blade",
Attack: 95,
Defense: 80,
Description: "Cyber-Warrior is a robotic warrior equipped with a sharp Energy Blade for rapid attacks.",
Color: "#f70205",
},

{
Serial: "CC_17",
name: "Astro-Mech",
illustration: "https://th.bing.com/th/id/OIG.yf5XaZ_mAE6wiZ2sdhAa?pid=ImgGn",
Type: "Robot",
Power: "Rocket Boost",
Attack: 85,
Defense: 65,
Description: "Astro-Mech is a flying robot capable of using a Rocket Boost for aerial maneuvers.",
Color: "#f70206",
},

{
Serial: "CC_18",
name: "Quantum-Mech",
illustration: "https://th.bing.com/th/id/OIG.NRpHh7_sY2QnFs1rniFO?pid=ImgGn",
Type: "Robot",
Power: "Quantum Pulse",
Attack: 120,
Defense: 90,
Description: "Quantum-Mech is a quantum robot with the power of Quantum Pulse for high-energy attacks.",
Color: "#f70207",
},

{
Serial: "CC_19",
name: "Steel Sentinel",
illustration: "https://th.bing.com/th/id/OIG.48xeHtxHFC7t7jKW6MAH?pid=ImgGn",
Type: "Robot",
Power: "Titanium Shield",
Attack: 100,
Defense: 110,
Description: "Steel Sentinel is a robotic guardian protected by a Titanium Shield.",
Color: "#f70208",
},

{
Serial: "CC_20",
name: "Laser Guardian",
illustration: "https://th.bing.com/th/id/OIG.PImB3ZkkmvKowwkPL8cH?pid=ImgGn",
Type: "Robot",
Power: "Laser Barrage",
Attack: 110,
Defense: 95,
Description: "Laser Guardian specializes in Laser Barrage attacks.",
Color: "#f70209",
},

{
Serial: "CC_21",
name: "Mech-Sniper",
illustration: "https://th.bing.com/th/id/OIG.vrh99gToh3e_QGn9UDQA?pid=ImgGn",
Type: "Robot",
Power: "Railgun Precision",
Attack: 95,
Defense: 105,
Description: "Mech-Sniper is a cyborg sniper armed with a high-precision Railgun.",
Color: "#f70210",
},

{
Serial: "CC_22",
name: "Nano-Bot",
illustration: "https://th.bing.com/th/id/OIG.ZwAEApO_kJ355ekStKL5?pid=ImgGn",
Type: "Robot",
Power: "Nanite Swarm",
Attack: 80,
Defense: 100,
Description: "Nano-Bot is a small robot capable of releasing a swarm of destructive nanites.",
Color: "#f70211",
},

{
Serial: "CC_23",
name: "Mech-Commander",
illustration: "https://th.bing.com/th/id/OIG.ym90g5d48XdwjucIvYah?pid=ImgGn",
Type: "Robot",
Power: "Tactical Overdrive",
Attack: 115,
Defense: 90,
Description: "Mech-Commander is a tactical leader capable of triggering Tactical Overdrive to boost its troops.",
Color: "#f70212",
},

{
Serial: "CC_24",
name: "Sonic Blaster",
illustration: "https://th.bing.com/th/id/OIG.mgxlAF1JIFdOoOwCV28G?pid=ImgGn",
Type: "Robot",
Power: "Sonic Wave",
Attack: 105,
Defense: 95,
Description: "Sonic Blaster is a robot equipped with a Sonic Wave that can disorient its enemies with powerful sound waves.",
Color: "#f70213",
},

{
Serial: "CC_25",
name: "Cyber Ninja",
illustration: "https://th.bing.com/th/id/OIG.2W04rk6mfDXaYqorbVk2?pid=ImgGn",
Type: "Post human",
Power: "Techno-Katana",
Attack: 95,
Defense: 75,
Description: "Cyber Ninja is a stealthy assassin cyborg equipped with a Techno-Katana, eliminating enemies from the shadows.",
Color: "#1900ff",
},

{
Serial: "CC_26",
name: "Mech-Soldier",
illustration: "https://th.bing.com/th/id/OIG.b0Fq2xVLCaXqvo1_yL27?pid=ImgGn",
Type: "Post human",
Power: "Plasma Blaster",
Attack: 80,
Defense: 90,
Description: "Mech-Soldier is a cyborg soldier armed with a Plasma Blaster for ranged combat.",
Color: "#1900ff",
},

{
Serial: "CC_27",
name: "Techno-Warrior",
illustration: "https://th.bing.com/th/id/OIG.hB8hPNXBGqltFSAKwzRk?pid=ImgGn",
Type: "Post human",
Power: "Energy Fist",
Attack: 105,
Defense: 70,
Description: "Techno-Warrior is a cyborg warrior with a powerful Energy Fist for close combat.",
Color: "#1900ff",
},

{
Serial: "CC_28",
name: "Bio-Enhancer",
illustration: "https://th.bing.com/th/id/OIG.6BCnTPjLh8wDmtvpeTSJ?pid=ImgGn",
Type: "Post human",
Power: "Genetic Boost",
Attack: 75,
Defense: 105,
Description: "Bio-Enhancer is an experimental cyborg enhanced through genetic modifications.",
Color: "#1900ff",
},

{
Serial: "CC_29",
name: "Stealth Operative",
illustration: "https://th.bing.com/th/id/OIG.jWZq7OCr3gEG5GLkeeAV?pid=ImgGn",
Type: "Post human",
Power: "Cloak & Dagger",
Attack: 85,
Defense: 80,
Description: "Stealth Operative is a cyborg spy capable of becoming invisible through its Cloak & Dagger technology.",
Color: "#1900ff",
},

{
Serial: "CC_30",
name: "Cyber-Shogun",
illustration: "https://th.bing.com/th/id/OIG.ePrA8R20MRC5PR4nVul.?pid=ImgGn&rs=1",
Type: "Post human",
Power: "Plasma Blade Barrage",
Attack: 110,
Defense: 85,
Description: "Cyber-Shogun is a master of plasma blade combat and can unleash a devastating Plasma Blade Barrage.",
Color: "#1900ff",
},

{
Serial: "CC_31",
name: "Plasma Engineer",
illustration: "https://th.bing.com/th/id/OIG.xokTBVrS5ArQvjBxVE_Z?pid=ImgGn&rs=1",
Type: "Post human",
Power: "Energy Overload",
Attack: 100,
Defense: 95,
Description: "Plasma Engineer excels in energy overload, able to release a devastating Energy Overload attack.",
Color: "#1900ff",
},

{
Serial: "CC_32",
name: "Techno-Hacker",
illustration: "https://th.bing.com/th/id/OIG.jtilX_QhnOnCv97XcD4N?pid=ImgGn",
Type: "Post human",
Power: "Cyber Intrusion",
Attack: 90,
Defense: 100,
Description: "Techno-Hacker is a cyborg hacker skilled in infiltrating enemy systems through Cyber Intrusion.",
Color: "#1900ff",
},

{
Serial: "CC_33",
name: "Bio-Mech",
illustration: "https://th.bing.com/th/id/OIG.VptENN4_OhOt_obGBr1t?pid=ImgGn",
Type: "Post human",
Power: "Bionic Charge",
Attack: 85,
Defense: 110,
Description: "Bio-Mech is a blend of biology and mechanics, capable of launching a powerful Bionic Charge.",
Color: "#1900ff",
},

{
Serial: "CC_34",
name: "Quantum Cyborg",
illustration: "https://th.bing.com/th/id/OIG.69LWowtQC.xiz7le5Rq2?pid=ImgGn",
Type: "Post human",
Power: "Quantum Leap",
Attack: 95,
Defense: 90,
Description: "Quantum Cyborg can perform a Quantum Leap for instant movement.",
Color: "#1900ff",
},

{
Serial: "CC_35",
name: "Cyber-Samurai",
illustration: "https://th.bing.com/th/id/OIG.lcJX3thCLk0hSTFT8_nA?pid=ImgGn",
Type: "Post human",
Power: "Blade Dance",
Attack: 105,
Defense: 95,
Description: "Cyber-Samurai is a cyborg sword master capable of performing a deadly Blade Dance.",
Color: "#1900ff",
},

{
Serial: "CC_36",
name: "Techno-Sniper",
illustration: "https://th.bing.com/th/id/OIG.3trBq4yfGFW6nNvqMiNE?pid=ImgGn",
Type: "Post human",
Power: "Laser Precision",
Attack: 110,
Defense: 100,
Description: "Techno-Sniper is a cyborg marksman with deadly laser precision.",
Color: "#1900ff",
},

{
Serial: "CC_37",
name: "Thunder Racer",
illustration: "https://th.bing.com/th/id/OIG.AWbhdBWsvHuisLbYBtEC?pid=ImgGn",
Type: "Vehicle",
Power: "Nitro Boost",
Attack: 90,
Defense: 70,
Description: "Thunder Racer is a futuristic racing car equipped with Nitro Boost for lightning-fast accelerations.",
Color: "#ffa200",
},

{
Serial: "CC_38",
name: "Mech-Transporter",
illustration: "https://th.bing.com/th/id/OIG.XCdfYb6SLrIPqSul7qjE?pid=ImgGn",
Type: "Vehicle",
Power: "Deploy Troops",
Attack: 75,
Defense: 95,
Description: "Mech-Transporter is a military vehicle capable of rapidly deploying troops on the battlefield.",
Color: "#ffa201",
},

{
Serial: "CC_39",
name: "Hoverbike",
illustration: "https://th.bing.com/th/id/OIG.rqeFsfSPXmBlb94eooPa?pid=ImgGn",
Type: "Vehicle",
Power: "Anti-Gravity Glide",
Attack: 85,
Defense: 80,
Description: "Hoverbike is a flying motorcycle with Anti-Gravity Glide capability for aerial travel.",
Color: "#ffa202",
},

{
Serial: "CC_40",
name: "Tank-Titan",
illustration: "https://th.bing.com/th/id/OIG.f_izVE5tBUJxbneAGJDU?pid=ImgGn",
Type: "Vehicle",
Power: "Heavy Cannon",
Attack: 105,
Defense: 110,
Description: "Tank-Titan is a massive assault tank armed with a Heavy Cannon for devastating attacks.",
Color: "#ffa203",
},

{
Serial: "CC_41",
name: "Cargo Carrier",
illustration: "https://th.bing.com/th/id/OIG.6uWtPZqzEWFYsSOy3Il1?pid=ImgGn",
Type: "Vehicle",
Power: "Cargo Hold",
Attack: 80,
Defense: 100,
Description: "Cargo Carrier is a space transport vehicle with a large Cargo Hold capacity.",
Color: "#ffa204",
},

{
Serial: "CC_42",
name: "Drone Destroyer",
illustration: "https://th.bing.com/th/id/OIG.huE81mbCrDT46acWjyb7?pid=ImgGn",
Type: "Vehicle",
Power: "Missile Barrage",
Attack: 110,
Defense: 85,
Description: "Drone Destroyer is an anti-aircraft vehicle equipped with Missile Barrage to take down enemy drones.",
Color: "#ffa205",
},

{
Serial: "CC_43",
name: "Solar Speedster",
illustration: "https://th.bing.com/th/id/OIG.JOGBt2RfHYQoU9e7LQZD?pid=ImgGn",
Type: "Vehicle",
Power: "Solar Panels",
Attack: 95,
Defense: 75,
Description: "Solar Speedster is a solar-powered car that generates energy through its Solar Panels.",
Color: "#ffa206",
},

{
Serial: "CC_44",
name: "Submersible Cruiser",
illustration: "https://th.bing.com/th/id/OIG.kQhLNLZTQZY0qEKNSA35?pid=ImgGn",
Type: "Vehicle",
Power: "Torpedo Launch",
Attack: 100,
Defense: 90,
Description: "Submersible Cruiser is an underwater vessel equipped with Torpedo Launch for underwater attacks.",
Color: "#ffa207",
},

{
Serial: "CC_45",
name: "Sky Skimmer",
illustration: "https://th.bing.com/th/id/OIG.BZ1O65DsdJhKN5zGn0xV?pid=ImgGn",
Type: "Vehicle",
Power: "Aerial Maneuver",
Attack: 85,
Defense: 105,
Description: "Sky Skimmer is a flying spacecraft capable of agile Aerial Maneuvers.",
Color: "#ffa208",
},

{
Serial: "CC_46",
name: "Laser Buggy",
illustration: "https://th.bing.com/th/id/OIG.S6Rm8sweBzRRjq0_iDOr?pid=ImgGn",
Type: "Vehicle",
Power: "Laser Turret",
Attack: 95,
Defense: 85,
Description: "Laser Buggy is a buggy equipped with a laser turret for precise targeting.",
Color: "#ffa209",
},

{
Serial: "CC_47",
name: "Recon Rover",
illustration: "https://th.bing.com/th/id/OIG.3dyFu386YgL.Dy19RMRI?pid=ImgGn",
Type: "Vehicle",
Power: "Surveillance System",
Attack: 80,
Defense: 110,
Description: "Recon Rover is a reconnaissance vehicle with an advanced Surveillance System for intelligence gathering.",
Color: "#ffa210",
},

{
Serial: "CC_48",
name: "Space Cruiser",
illustration: "https://th.bing.com/th/id/OIG.7at.9nXT9tb8FSU2jE7r?pid=ImgGn",
Type: "Vehicle",
Power: "Warp Drive",
Attack: 90,
Defense: 95,
Description: "Space Cruiser is a spaceship equipped with a Warp Drive for rapid interstellar travel.",
Color: "#ffa211",
},

];

//mapping collection to index
const returnCollection = (collection) => {
return collection.map((object) => `

<div class ="carte">

<div class ="carte_header">
<div class="type"><p>${object.Type}</p></div>
<div class="color">${object.Color}</div>
</div>

<div class="illustration">
<img src="${object.illustration}" alt="${object.name}">
</div>

<div class="name_A_D">
<div class="name"><p>${object.name}</p></div>
<div class="name"><p>${object.Attack}/${object.Defense}</p></div>

</div>

<div class="text">
<div class="power"><h2>Power: ${object.Power}</h2></div>
<div class="description"><p>${object.Description}</p></div>
</div>


</div>
`            
// <div class="footer"><p>${object.Text}</p></div> -> srting text to add ''copyrights'' thing on the card


).join(""); // Use join("") to convert the array of strings to a single string
};
container.innerHTML = returnCollection(collection);


        
//sorting buttons
container.innerHTML = returnCollection(collection);
       
    function filterAndDisplayObjects(type) {
            const filteredObjects = collection.filter((object) => object.Type === type);
            container.innerHTML = returnCollection(filteredObjects);
        }

        const showAliensButton = document.getElementById("showAliens");
        showAliensButton.addEventListener("click", () => filterAndDisplayObjects("Alien"));
        
        const showRobotsButton = document.getElementById("showRobots");
        showRobotsButton.addEventListener("click", () => filterAndDisplayObjects("Robot"));
        
        const showPost_humansButton = document.getElementById("showPost_humans");
        showPost_humansButton.addEventListener("click", () => filterAndDisplayObjects("Post human"));
        
        const showVehiclesButton = document.getElementById("showVehicles");
        showVehiclesButton.addEventListener("click", () => filterAndDisplayObjects("Vehicle"));
        
        const showAllButton = document.getElementById("showAllButton");
        showAllButton.addEventListener("click", () => {
            container.innerHTML = returnCollection(collection);
        });


//adding some text to all objects at once
        const copyrights = "All rights reserved by the Toma-Cola Company";

        collection.forEach((object) => {
            object.Text = copyrights;
        });

        console.log(copyrights);
//I tried but I don't have time anymore now. --> JS ok but styling is messy.
// main goal is to have a delete button so: 



