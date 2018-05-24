import React, { Component } from 'react';
import Photo from './Photo/Photo';
import Overlay from './Overlay/Overlay';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      overlayVisible: false,
      active: {
        imageUrl: "",
        portrait: false
      },
      photos: [
        {
          url: "beach_devon_discovery_land_rover_sky_stars_starts9_lfdewt.jpg",
          localUrl: "beach_devon_discovery_land_rover_sky_stars_starts9_z0bevv.jpg",
          portrait: true
        },
        {
          url: "beach_camping_devon_discovery_road_trip_summer_sunrise_sunset_wild_camping10_hfvyku.jpg",
          localUrl: "beach_camping_devon_discovery_road_trip_summer_sunrise_sunset_wild_camping10_fvtsvf.jpg",
          portrait: false
        },
        {
          url: "4x4_defender_evening_green_laning_off_road_salisbury_summer_sunset_wiltshire8_t87bfd.jpg",
          localUrl: "4x4_defender_evening_green_laning_off_road_salisbury_summer_sunset_wiltshire8_uece96.jpg",
          portrait: true
        },
        {
          url: "brecon_brecon_beacons_cloud_fog_ldg_mountain_pen_y_fan_sky_summit_sun_sunrise_wales14_zczlfn.jpg",
          localUrl: "brecon_brecon_beacons_cloud_fog_ldg_mountain_pen_y_fan_sky_summit_sun_sunrise_wales14_jbcpia.jpg",
          portrait: false
        },
        {
          url: "brecon_brecon_beacons_cloud_fog_ldg_mountain_pen_y_fan_sky_summit_sun_sunrise_wales15_he5dxw.jpg",
          localUrl: "brecon_brecon_beacons_cloud_fog_ldg_mountain_pen_y_fan_sky_summit_sun_sunrise_wales15.jpg",
          portrait: true
        },
        {
          url: "dog_forest_freya_puppy_quantocks_sunset_walk5_znmg5p.jpg",
          localUrl: "freya_dog_sunset.jpg",
          portrait: true
        },
        {
          url: "dunster_louise_march_somerset1_qub08h.jpg",
          localUrl: "dunster_house_winter.jpg",
          portrait: true
        },
        {
          url: "forest_great_wood_grey_ldg_lumber_portrait_rainy_ramscombe_somerset_summer_wood_woods12_t1c1sh.jpg",
          localUrl: "ldg_forest_portrait.jpg",
          portrait: false
        },
        {
          url: "forest_great_wood_grey_ldg_lumber_portrait_rainy_ramscombe_somerset_summer_wood_woods13_aayqgl.jpg",
          localUrl: "forest_greatwood_grey_ldg_lumber_portrait_rainy_ramscombe_somerset_summer.jpg",
          portrait: true
        },
        {
          url: "country_countryside_dogs_felds_jade_chidgey_portrait_puppy_quantocks_samuel_thompson_shooting_somerset-19_fkmokv.jpg",
          localUrl: "country_countryside_dogs_felds_jade_chidgey_portra.jpg",
          portrait: false
        },
        {
          url: "country_countryside_dogs_felds_jade_chidgey_portrait_puppy_quantocks_samuel_thompson_shooting_somerset-11_pnvfgz.jpg",
          localUrl: "country_countryside_dogs_felds_jade_chidgey_portra_2.jpg",
          portrait: true
        },
        {
          url: "abbie_chloe_windle_equestrian_horse_poser_samuel_thompson_wiltshire_winter-6_jx7wyb.jpg",
          localUrl: "abbie_chloe_windle_equestrian_horse_poser_samuel_t.jpg",
          portrait: false
        },
        {
          url: "abbie_chloe_windle_equestrian_horse_poser_samuel_thompson_wiltshire_winter-23_nxkuzh.jpg",
          localUrl: "abbie_chloe_windle_equestrian_horse_poser_samuel_t_2.jpg",
          portrait: true
        },
        {
          url: "forest_great_wood_portrait_quantock_hills_samuel_thompson_smoke_somerset_trees_woods-12_sv7a1i.jpg",
          localUrl: "forest_great_wood_portrait_quantock_hills_samuel_t.jpg",
          portrait: true
        },
        {
          url: "astro_Mendips_milky_way_Priddy_reflections_samuel_thompson_stars-1-2_g23s50.jpg",
          localUrl: "astro_Mendips_milky_way_Priddy_reflections_samuel_t.jpg",
          portrait: true
        },
        {
          url: "band_BRIDGES_commercial_group_music_portrait_promo_samuel_thompson-13_mkbdtv.jpg",
          localUrl: "band_BRIDGES_commercial_group_music_portrait_promo.jpg",
          portrait: false
        },
        {
          url: "beach_fire_kilve_ldg_lifestyle_samuel_thompson_somerset_sunset-8_nwuwqq.jpg",
          localUrl: "beach_fire_kilve_ldg_lifestyle_samuel_thompson_som.jpg",
          portrait: true
        },
        {
          url: "4x4_countryside_defender_forest_green_lane_lane_off_road_outdoors_samuel_thompson_somerset_trees_woods-1_fcbauk.jpg",
          localUrl: "4x4_countryside_defender_forest_green_lane_lane_of.jpg",
          portrait: false
        },
        {
          url: "country_countryside_dogs_felds_jade_chidgey_portrait_puppy_quantocks_samuel_thompson_shooting_somerset-27_icuacm.jpg",
          localUrl: "country_countryside_dogs_felds_jade_chidgey_portra_3.jpg",
          portrait: true
        },
        {
          url: "kings_cliff_mountain_biking_mtb_quantocks_sam_baskett_samuel_thompson_somerset_sport-4_upjkoh.jpg",
          localUrl: "kings_cliff_mountain_biking_mtb_quantocks_sam_bask.jpg",
          portrait: false
        },
        {
          url: "cheddar_fog_forest_ldg_mist_rain_samuel_thompson_Stock_Hill_summer_woods-10_czpjek.jpg",
          localUrl: "cheddar_fog_forest_ldg_mist_rain_samuel_thompson_S.jpg",
          portrait: true
        },
        {
          url: "equine_honour_burges_horse_joey_pony_portrait_samuel_thompson_sport-1_zeu5ag.jpg",
          localUrl: "equine_honour_burges_horse_joey_pony_portrait_samu.jpg",
          portrait: false
        },
        {
          url: "beach_black_church_rock_devon_ldg_samuel_thompson_sunset_woods-1_xuzxfr.jpg",
          localUrl: "beach_black_church_rock_devon_ldg_samuel_thompson.jpg",
          portrait: true
        },
        {
          url: "BRIDGES_bristol_festivals_harbor_festival_music_oxford_samuel_thompson_truck_festival-1_ykbv6f.jpg",
          localUrl: "BRIDGES_bristol_festivals_harbor_festival_music_ox.jpg",
          portrait: false
        }
      ]
    }
  }

  changeOverlay = (photoIndex) => {
    let status = !this.state.overlayVisible;
    this.setState({
      overlayVisible: status,
      active: {
        imageUrl: this.state.photos[photoIndex].url,
        portrait: this.state.photos[photoIndex].portrait
      }
    }, () => console.log(this.state));
  }

  isOverlayVisible = () => {
    if(this.state.overlayVisible) {
      return "image-overlay visible";
    }
    return "image-overlay";
  }

  render() {
    return (
      <div className="">

        <header className="page__header">
          <h1 className="identity identity--split">Samuel Thompson</h1>
          <nav className="menu">
            <ul>
              <li className="menu__item">
                <a href="" className="menu__link menu__link--active" title="">Home</a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link" title="">About</a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link" title="">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="page__content">
          <section className="grid">
            {this.state.photos.map(function(photo, index) {
              return <Photo local={photo.localUrl} hosted={photo.url} portrait={photo.portrait} index={index} handler={this.changeOverlay} />;
            }, this)}
          </section>
        </main>

        <section className={this.isOverlayVisible()}>
          {this.state.overlayVisible && <Overlay image={this.state.active.imageUrl} portrait={this.state.active.portrait} visible={this.state.overlayVisible} handler={this.changeOverlay} />}
        </section>

      </div>
    );
  }
}

export default App;
