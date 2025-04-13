<template>
    <div class="team">
    <div class="team-info">
            <div class="team-content">
                <h3 class="our-team-subtitle">OUR TEAM</h3>
                <h2 class="our-team-title">Meet Our Amazing Team</h2>
            </div>
        </div>
    <div class="list-team-container">
        
      <div v-for="(member, index) in teamMembers" :key="index" class="our-team-card">
        <div class="background">
        <img :src="member.image" :alt="member.name" class="our-team-image" />
        <div class="team-overlay"></div>
        <div class="our-team-info">
            <div class="team-media">
            <button @click="goToExternalSite('https://www.instagram.com/')" class="btn-media"><img src="/img/logoinst.png"></button>
            <button @click="goToExternalSite('https://www.facebook.com/')" class="btn-media"><img src="/img/logofb.png"></button>
            <button @click="goToExternalSite('https://twitter.com/')" class="btn-media"><img src="/img/logotw.png"></button>
          </div>
          <h3 class="team-name">{{ member.name }}</h3>
          <p class="team-role">{{ member.role }}</p>
          
        </div>
        </div>
    
      </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        teamMembers: [
          { name: "Bondan Prabowo", role: "CEO", image: "/img/team1.png" },
          { name: "Bayu Aji", role: "VR Development", image: "/img/team2.png" },
          { name: "Agung Brandon", role: "VR Artist", image: "/img/team3.png" },
          { name: "Aril Laso", role: "UI/UX Designer", image: "/img/team4.png" },
          { name: "AAldo Boy", role: "3D Designer", image: "/img/team5.png" },
          { name: "Beni Barak", role: "3D Artist", image: "/img/team6.png" },
        ],
      };
    },
    methods: {
    goToExternalSite(url) {
      window.open(url, "_blank");
    }
  }
  };
  </script>
  
  <style scoped>

  .team {
    margin-bottom: 160px;
  }

.team-info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 41px;
    align-items: center;
    justify-content: center;
   }

   .team-content {
    text-align: center;
   }

    .our-team-subtitle {
        background: linear-gradient(90.00deg, rgb(12, 186, 241), rgb(233, 92, 233));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Chakra Petch";
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;
    display: inline-block;
    }

    .our-team-title {
        color: rgb(255, 255, 255);
        font-size: 48px;
        font-weight: 600;
    }

  .list-team-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 31px;
    margin-bottom: 64px;
  }
  
  .our-team-card {
    
    width: 379px;
    height: 503px;
    background: rgb(37 37 50);
    border: 2px solid;
    border-image-source: linear-gradient(147deg,rgba(255, 255, 255, 0.164),rgb(255, 255, 255, 0));
    border-image-slice: 1;
    display: flex;
    align-items: center;
    justify-content: center;;
  }

  .background {
    position: relative;
    width: 355px;
    height: 479px;
    overflow: hidden;
  }

  .our-team-card:hover {
    border: 2px solid;
    border-image-source: linear-gradient(-45deg, #0cbaf1, #e95ce9);
    border-image-slice: 1;
    box-shadow: 0 0 10px #3498db, 0 0 40px #3498db;
  }
  
  .our-team-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .team-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180.00deg, rgba(50, 70, 188, 0),rgb(25, 40, 131) 100%);
  }
  
  .our-team-info {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: white;
    font-size: 14px;
  }

  .team-name {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 600;
  }

  .team-role {
    color: rgb(176, 176, 178);
    font-size: 12px;
    font-weight: 400;
  }

  .team-media {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    opacity: 0;
    transition: all 0.3s ease;
    margin-bottom: 16px;
  }

  .btn-media {
    width: 46px;
    height: 46px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    border: none;
  }
 
  .our-team-card:hover .team-media {
    opacity: 1;
  }

  @media (max-width: 1024px){
    .list-team-container {
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
    }
  }
  

  @media (max-width: 768px) {
    .list-team-container {
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
    }

    .our-team-card {
      width: 350px;
    height: 476px;
    }

    .background {
      width: 326px;
    height: 451px;
    }
  }


  @media (max-width: 425px) {
    .our-team-title {
      font-size: 32px;
    }

    .list-team-container {
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
    }
  }

 
  </style>
  