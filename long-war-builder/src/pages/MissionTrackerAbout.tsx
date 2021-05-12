import { Fragment } from 'react';
import NavHeader from '../components/NavHeader';

const MissionTrackerAbout = (): JSX.Element => {
  return (
    <Fragment>
      <NavHeader classSelector={false} location={'missionAbout'} />

      <div
        className="flex-auto flex-col justify-center content-center text-gray-50 m-4 p-4 mt-1 pt-2 bg-darkGray opacity-100 h-auto rounded shadow-lg
        overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-scrollbarGray"
        style={{ maxHeight: '80%' }}
      >
        <div className="flex flex-col">
          <h3 className="text-xl text-center underline">Assumed Knowledge</h3>
          <p className="mt-2">
            Using the Mission Tracker requires some knowledge of how Long War generates missions. I recommend reading
            the wiki to get familiar with the concepts of alien resources, threat, and the mission table.
          </p>
          <a href="https://www.ufopaedia.org/index.php/Alien_Resources_(Long_War)" className="text-blue-500 w-max">
            Alien Resources
          </a>
          <a href="https://www.ufopaedia.org/index.php/Threat_(Long_War)" className="text-blue-500 w-max">
            Alien Threat
          </a>
          <a href="https://www.ufopaedia.org/index.php/Alien_Missions_(Long_War)" className="text-blue-500 w-max">
            Alien Missions
          </a>
          <p className="mt-2">
            As well as using one of the following mods to simplify tracking resources/threat in game.
          </p>
          <a
            href="https://www.reddit.com/r/Xcom/comments/2zbkgj/lw_mod_alien_strategic_stats_exposed/"
            className="text-blue-500 w-max"
          >
            Alien Strategic Stats Exposed (Reddit)
          </a>
          <a href="https://www.nexusmods.com/xcom/mods/610?tab=description" className="text-blue-500 w-max">
            Alien Stats Exposed (Nexus)
          </a>
          <p className="mt-2">
            The TLDR is aliens have resources that they generate from harvest missions, and from alien bases (though
            construction of a base costs resources). As well as a threat level which indicates how much of a threat the
            aliens perceive xcom, the more UFO&apos;s you shoot down and missions you complete the higher your threat.
          </p>
          <p className="mt-2">
            At the start of each month Long War uses these 2 variables on a scale of 0-4, to determine what missions the
            aliens will run for that month.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl text-center underline">How Does the Mission Tracker Work?</h3>
          <p className="mt-2">
            The Mission Tracker has 3 main components, the Mission Calculator, Mission Tracker and Mission Reference.
          </p>
          <ul className="list-disc pl-8">
            <li>
              Mission Calculator: This component has 2 modes, Set or Calculate. Set allows you to directly set the Alien
              Resources and Threat Level Categories. While calculate lets you calculate Alien Resources and Threat
              Category based on some easier to track inputs. (Whichever option you prefer I highly recommend using one
              of the tracking mods linked above to save yourself some effort.)
            </li>
            <li>
              Mission Tracker: Based on the Alien Resource and Threat Category Levels calculated in the above component,
              this section will display the expected missions for the month, and allow you to track which missions have
              been completed. As well as providing a notes section you can utilize however you wish.
            </li>
            <li>
              Mission Reference: This reference table should help you figure out what mission each UFO you see is
              attempting, so you can make more informed decisions about what to send interceptors after. It is
              effectively a copy of Mission Types section of the Alien Missions page on the wiki linked above, I
              recommend reading through that section to better understand each mission, and the resource cost section
              for each UFO.
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default MissionTrackerAbout;
