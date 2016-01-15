import React from 'react';
import WinCover from '@economist/component-win-cover';

const entries = [
  {
    tabtitle: '2016',
    title: '00',
    bodycopy: `<h2>Welcome...</h2>
    <p>
    To mark the 30th edition of the <em>The World in</em>, we have chosen one article from each
    issue to reflect three decades of forward-thinking.
    </p>`,
    byline: 'From The World in 2000',
    url: '/article/10447/world-2016',
  },
  {
    tabtitle: '2015',
    title: '01',
    image: '/assets/35.png',
    bodycopy: `<h2>Unfinished business for the world's women</h2>
    <p>
    In 2016 Hillary Clinton could become the first woman to lead the
    United States. In <em>The World in 2015</em>, she looked ahead to the 20th anniversary
    of the UN's World Conference on Women noting that there is still much to do if
    women are to enjoy the same opportunities as men.
    </p>`,
    byline: 'From The World in 2015',
    url: '/article/12073',
  },
  {
    tabtitle: '2014',
    title: '02',
    image: '/assets/24.png',
    bodycopy: `<h2>The Great War</h2>
    <p>
    For the centenary of the outbreak of the first world war in 1914, the only
    war in British history called "Great", Ann Wroe, <i>The Economist's</i> obituaries
    editor, hoped that Europe’s commemorations during 2014 might perhaps end a 100-year haunting.
    </p>`,
    byline: 'From The World in 2014',
    url: '/article/12072',
  },
  {
    tabtitle: '2013',
    title: '03',
    image: '/assets/30.png',
    bodycopy: `<h2>The lottery of life</h2>
    <p>
    In <em>The World in 1988</em>, The Economist Intelligence Unit (EIU) ranked 50 countries according
    to where would be the best place to be born in 1988; America topped the list.
    Twenty-five years later, Laza Kekic of the EIU revisited the index to find
    out where might be the best place for a lucky baby born in 2013.
    </p>`,
    byline: 'The World in 2013',
    url: '/article/12071',
  },
  {
    tabtitle: '2012',
    title: '04',
    image: '/assets/28.png',
    bodycopy: `<h2>Sharing to the power of 2012</h2>
    <p>
    Sheryl Sandberg, chief operating officer of Facebook, predicted that social
    media would have an ever-deepening impact on everything from our private
    lives to presidential politics.
    </p>`,
    byline: 'From The World in 2012',
    url: '/article/12070',
  },
  {
    tabtitle: '2011',
    title: '05',
    image: '/assets/19.png',
    bodycopy: `<h2>Another year, another billion</h2>
    <p>
    The world's population was expected to reach seven billion in 2011. The
    increase from six to seven billion had only taken a dozen years, prompting
    a Malthusian panic about the dire impact of overpopulation. John Parker,
    then The Economist's globalisation correspondent, took a calmer view,
    arguing that the underlying rate of population growth was, in fact, slowing.
    </p>`,
    byline: 'From The World in 2011',
    url: '/article/12069',
  },
  {
    tabtitle: '2010',
    title: '06',
    image: '/assets/02.png',
    bodycopy: `<h2>Space, the fiscal frontier</h2>
    <p>
    Space may well be the final frontier for disruption. In <em>The World in 2010</em>
    Elon Musk, CEO and chief technology officer of SpaceX, made the case for
    commercial space travel, arguing that only the private sector is capable
    of advancing the cause of space exploration and travel.
    </p>`,
    byline: 'From The World in 2010',
    url: '/article/12068',
  },
  {
    tabtitle: '2009',
    title: '07',
    image: '/assets/31.png',
    bodycopy: `<h2>About 2008: sorry</h2>
    <p>
    The financial crisis of 2008 caught everyone by surprise—not least, it must
    be admitted with a flush of embarrassment, <em>The World in</em>. Our editor used
    his annual column of hits and misses to come clean about failing to spot the
    biggest financial crisis since the Depression but offered two-and-a-half
    reasons to keep reading our predictions.
    </p>`,
    byline: 'From The World in 2009',
    url: '/article/12067',
  },
  {
    tabtitle: '2008',
    title: '08',
    image: '/assets/18.png',
    bodycopy: `<h2>007 in 008</h2>
    <p>
    James Bond, the debonair, fictional creation of Ian Fleming, had much to
    celebrate in 2008, with an exhibition at the Imperial War Museum in London,
    a new Bond novel (despite Fleming's death in 1964) and the latest Bond film.
    John Grimond, writer at large for The Economist and husband of Ian Fleming's
    niece, looked at what makes Bond such an enduring cultural character.
    </p>`,
    byline: 'From The World in 2008',
    url: '/article/12066',
  },
  {
    tabtitle: '2007',
    title: '09',
    image: '/assets/34.png',
    bodycopy: `<h2>Work-life imbalance</h2>
    <p>
    In the 1990s a wonderful new way of working beckoned: a world where it would
    be possible to work when and where you wanted and enjoy that elusive
    ideal—work-life balance. In <em>The World in 2007</em>,  Lucy Kellaway of the
    Financial Times not only lamented the revolution that never arrived but
    predicted that long hours would be back with a vengeance.
    </p>`,
    byline: 'From The World in 2009',
    url: '/article/12065',
  },
  {
    tabtitle: '2006',
    title: '10',
    image: '/assets/32.png',
    bodycopy: `<h2>Looking back on the future</h2>
    <p>
    For The World in...'s 20th edition, we invited an historian, Niall Ferguson, to take a critical look at our record
    </p>`,
    byline: 'From The World in 2006',
    url: '/article/12064',
  },
  {
    tabtitle: '2005',
    title: '11',
    image: '/assets/05.png',
    bodycopy: `<h2>The age of phonography</h2>
    <p>
    In 2004 digital cameras outsold film cameras for the first time—but both
    were outstripped by sales of camera-phones, even though the quality of such
    cameras was hopelessly inferior. In <em>The World in 2005</em>, Tom Standage, then
    The Economist's technology editor, predicted that phone technology might
    improve enough to compete with digital cameras—eventually.
    </p>`,
    byline: 'From The World in 2005',
    url: '/article/12063',
  },
  {
    tabtitle: '2004',
    title: '12',
    image: '/assets/08.png',
    bodycopy: `<h2>A new impetus for old Europe</h2>
    <p>
    The enlargement of the European Union in 2004 was the biggest single
    expansion of the union to date. Vaclav Havel, former president of the
    Czech Republic, looked ahead to a larger, livelier European Union.
    </p>`,
    byline: 'From The World in 2004',
    url: '/article/12062',
  },
  {
    tabtitle: '2003',
    title: '13',
    image: '/assets/13.png',
    bodycopy: `<h2>As safe as houses?</h2>
    <p>
    The rise in property prices in many cities across the world made ordinary
    people asset-rich and priced young people off the housing ladder.
    In 2003, however, Pam Woodall, the economics editor of The Economist at the
    time, took a gloomy view of the housing market and predicted that the bubble would burst.
    </p>`,
    byline: 'From The World in 2003',
    url: '/article/12061',
  },
  {
    tabtitle: '2002',
    title: '14',
    image: '/assets/29.png',
    bodycopy: `<h2>Europe's day of change</h2>
    <p>
    The first euro coins and notes started circulating on New Year's Day, 2002.
    Gideon Rachman, then Brussels correspondent for The Economist, predicted
    that the single currency's impact would go far beyond being simply a new way
    to pay at the supermarket. It would alter forever Europe's view both of itself and of the world.
    </p>`,
    byline: 'From The World in 2002',
    url: '/article/12060',
  },
  {
    tabtitle: '2001',
    title: '15',
    image: '/assets/09.png',
    bodycopy: `<h2>Where's the world's worst?</h2>
    <p>
    There are many dismal places in which to live, but in 2001 The Economist
    Intelligence Unit awarded Afghanistan the dubious honour of being the worst
    place to live. Pointing, among other things, to Osama bin Laden's presence
    there, the EIU forecast that life in Afghanistan was going to get even worse.
    </p>`,
    byline: 'From The World in 2001',
    url: '/article/12059',
  },
  {
    tabtitle: '2000',
    title: '16',
    image: '/assets/33.png',
    bodycopy: `<h2>Can e-commerce deliver?</h2>
    <p>
    Peter Drucker, the grandee of management science, took an early look at the disruptive power of e-commerce.
    </p>`,
    byline: 'From The World in 2000',
    url: '/article/12058',
  },
  {
    tabtitle: '1999',
    title: '17',
    image: '/assets/22.png',
    bodycopy: `<h2>The empire of democracy</h2>
    <p>
    NATO's first, tentative intervention in Kosovo in 1998 defied prevailing rules
    about the sacred principle of sovereignty. Brian Beedham, an associate editor
    at The Economist at the time, asserted that it also gave the world a new rule:
    that no undemocratic state could expect its sovereignty to remain untouched.
    </p>`,
    byline: 'From The World in 1999',
    url: '/article/12057',
  },
  {
    tabtitle: '1998',
    title: '18',
    image: '/assets/03.png',
    bodycopy: `<h2>The Web lifestyle</h2>
    <p>
    Writing for <em>The World in 1998</em>, Microsoft's chairman. Bill Gates, forecast
    what has since become obvious: that, within a decade, the Web, as we called
    it then, would transform every facet of life.
    </p>`,
    byline: 'From The World in 1998',
    url: '/article/12056',
  },
  {
    tabtitle: '1997',
    title: '19',
    image: '/assets/14.png',
    bodycopy: `<h2>Hong Kong, July 1st</h2>
    <p>
    On June 30th 1997 Britain handed Hong Kong back to China. In <em>The World in 1997</em>,
    the last British governor of the territory, Christopher Patten, speculated on
    whether Hong Kong would survive as a democratic, free-market economy.
    </p>`,
    byline: 'From The World in 1997',
    url: '/article/12055',
  },
  {
    tabtitle: '1996',
    title: '20',
    image: '/assets/20.png',
    bodycopy: `<h2>A Labour Britain's promise</h2>
    <p>
    <em>The World in 1996</em> asked Tony Blair, then Britain's opposition leader, to spell
    out his ideas for the country in the coming year.
    </p>`,
    byline: 'From The World in 1996',
    url: '/article/12048',
  },
  {
    tabtitle: '1995',
    title: '21',
    image: '/assets/06.png',
    bodycopy: `<h2>In search of craziness</h2>
    <p>
    Tom Peters, a management guru, made a plea for businesses to embrace the
    crazy and be more innovative, adventurous and imaginative.
    </p>`,
    byline: 'From The World in 1995',
    url: '/article/12046',
  },
  {
    tabtitle: '1994',
    title: '22',
    image: '/assets/27.png',
    bodycopy: `<h2>Join the derivatives club</h2>
    <p>
    Financial derivatives had swept the markets and baffled regulators and even
    bankers. Marjorie Deane, an expert on international finance and formerly a
    finance editor at The Economist, predicted that markets in some emerging
    economies were about to enter the fray.
    </p>`,
    byline: 'From The World in 1994',
    url: '/article/12045',
  },
  {
    tabtitle: '1993',
    title: '23',
    image: '/assets/01.png',
    bodycopy: `<h2>New people, new vigour, old ideas</h2>
    <p>
    The Clintonian era began with the inauguration of Bill Clinton as the 42nd
    president of the United States in January 1993. Mike Elliot, who was
    The Economist's Washington bureau chief at the time, asked whether the new
    president would be able to put his "new Democrat" ideas into practice.
    </p>`,
    byline: 'From The World in 1993',
    url: '/article/12044',
  },
  {
    tabtitle: '1992',
    title: '25',
    image: '/assets/23.png',
    bodycopy: `<h2>And now for the next 500 years</h2>
    <p>
    Paul Kennedy, a professor of history at Yale University, asked where America
    was headed 500 years after Columbus landed in the New World.
    </p>`,
    byline: 'From The World in 1992',
    url: '/article/12043',
  },
  {
    tabtitle: '1991',
    title: '26',
    image: '/assets/26.png',
    bodycopy: `<h2>The next big bust</h2>
    <p>
    Following the crash of the Japan's stockmarket in 1990,
    Bill Emmott, then business-affairs editor of The Economist,
    predicted its property market would be next to fall to earth.
    </p>`,
    byline: 'From The World in 1991',
    url: '/article/12042',
  },
  {
    tabtitle: '1990',
    title: '27',
    image: '/assets/21.png',
    bodycopy: `<h2>After communism</h2>
    <p>
    The collapse of communism in 1989 created an entirely new political and
    economic landscape. In <em>The World in 1990</em>, Norman Macrae, The Economist's
    deputy editor at the time, pondered the economic fates of those countries
    freed by the fall of the Soviet Union.
    </p>`,
    byline: 'From The World in 1990',
    url: '/article/12041',
  },
  {
    tabtitle: '1989',
    title: '28',
    image: '/assets/36.png',
    bodycopy: `<h2>The World in 1989...and on to the 1990s</h2>
    <p>
    As a new decade loomed, Mary Goldring, editor of <em>The World in 1989</em>, took a
    (relatively) optimistic view of the 1990s.
    </p>`,
    byline: 'From The World in 1989',
    url: '/article/12040',

  },
  {
    tabtitle: '1988',
    title: '29',
    image: '/assets/11.png',
    bodycopy: `<h2>AIDS casts a dark shadow</h2>
    <p>
    Matt Ridley, then The Economist's Washington correspondent, speculated on
    what had been learned during the first decade of AIDS that could help to
    halt the march of a seemingly unstoppable disease.
    </p>`,
    byline: 'From The World in 1988',
    url: '/article/11815',
  },
  {
    tabtitle: '1987',
    title: '30',
    image: '/assets/15.png',
    bodycopy: `<h2>The World in 1987: A political outlook</h2>
    <p>
    In the first edition of <em>The World in</em>..., Andrew Boyd, who wrote on foreign
    affairs for The Economist between 1951 and 1988, looked at the challenges
    facing a lame-duck American president and his ambitious, much younger Soviet
    counterpart.
    </p>`,
    byline: 'From The World in 1987',
  },
];
export default function CoverHandler() {
  return (
    <WinCover onChangeIndex="" prevNext="arrows" entries={entries}/>
  );
}
