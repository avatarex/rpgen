function hamta_bakgrundstabeller (){
	
	// expertispoang=2 eller expertiser=2?
	
	
    bakgrundstabellista = ["jargiensbefolkning", "vildmark", "nermadasbefolkning", "damarien"];
	var bakgrundstabeller = {};
	var i;
	bakgrundstabeller.lista=bakgrundstabellista;
    bakgrundstabeller.rubriker=["Jargiens befolkning", "Vildmark", "Nermadas befolkning", "Damariens befolkning"];
    // --- //
    
    bakgrundstabeller.jargiensbefolkning = [];
	bakgrundstabeller.jargiensbefolkning[0] = {};
	bakgrundstabeller.jargiensbefolkning[0].subval = [[[]]];
	bakgrundstabeller.jargiensbefolkning[0].vald = 0;
    bakgrundstabeller.jargiensbefolkning[0].rubrik="Jargiens befolkning";
    bakgrundstabeller.jargiensbefolkning[0].namn="jargiensbefolkning";
    
	bakgrundstabeller.jargiensbefolkning[1]= {};
	bakgrundstabeller.jargiensbefolkning[1].rubrik="Alkemist";
	bakgrundstabeller.jargiensbefolkning[1].bestamd="alkemisten";
	bakgrundstabeller.jargiensbefolkning[1].obestamd="en alkemist";
	bakgrundstabeller.jargiensbefolkning[1].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[1].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[1].mystikfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[1].beskrivning="Alkemisten �r en konstn�r besatt av att t�mja de mystiska krafter som ingjutits i livets vatten som genomsyrar v�rlden. Vissa n�r erk�nnande men m�nga slutar som galningar efter att ha luktat f�r djupt i de dunster som salter och syror uts�ndrar. Alkemisten viger sitt liv �t att f�rena magi, vetenskap och ockultism. De f�r dock bruka sina konster i hemlighet d� inkvisitionen ser dessa som k�ttare och svartkonstn�rer.";
	bakgrundstabeller.jargiensbefolkning[1].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 4 enheter Mystikf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[2] = {};
	bakgrundstabeller.jargiensbefolkning[2].rubrik="Apotekare";
	bakgrundstabeller.jargiensbefolkning[2].bestamd="apotekaren";
	bakgrundstabeller.jargiensbefolkning[2].obestamd="en apotekare";
	bakgrundstabeller.jargiensbefolkning[2].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[2].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[2].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[2].beskrivning="I tr�nga butiker i st�derna, stugor p� landsbygden eller t�ckta vagnar som r�r sig mellan byarna f�rr�ttar apotekarna sitt v�rv. De f�rser folket med extrakt, salvor och dekokter som s�gs bota allt fr�n magont, eksem och varande s�r till h�ravfall, impotens och tandv�rk. Vissa kan konsten att s�tta stopp f�r o�nskade graviditeter och andra s�ljer gifter utan att st�lla n�gra fr�gor.";
	bakgrundstabeller.jargiensbefolkning[2].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Kunskapsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[3] = {};
	bakgrundstabeller.jargiensbefolkning[3].rubrik="Arkitektor";
	bakgrundstabeller.jargiensbefolkning[3].bestamd="arkitektorn";
	bakgrundstabeller.jargiensbefolkning[3].obestamd="en arkitektor";
	bakgrundstabeller.jargiensbefolkning[3].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[3].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[3].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[3].beskrivning="Om ingen ser efter st�derna hamnar de snart i f�rfall. Hus rasar samman, kloakerna sv�mmar �ver, akvedukterna slammar igen. Arkitektorn har ansvaret f�r att se till att allt fungerar. Detta p�verkar handeln samt var och n�r nya inr�ttningar f�r uppf�ras. Detta g�r att positionen som arkitektor �r en av de mest inkomstbringande n�r det g�ller mutor d� s� gott som alla vill h�lla sig v�l med denne.";
	bakgrundstabeller.jargiensbefolkning[3].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[4] = {};
	bakgrundstabeller.jargiensbefolkning[4].rubrik="Balsamerare";
	bakgrundstabeller.jargiensbefolkning[4].bestamd="balsameraren";
	bakgrundstabeller.jargiensbefolkning[4].obestamd="en balsamerare";
	bakgrundstabeller.jargiensbefolkning[4].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[4].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[4].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[4].beskrivning="Det finns en gammal tradition att balsamera sina d�da hos den �vre klassen d�r man ser det som sin plikt att f�rvara f�rf�der i kryptor och gravvalv till tidens �nde. Andra balsamerare stoppar upp djur och monster samt kokar skallar och rensar kadaver till de �dlingar och handelsfurstar som vill ha st�tliga trof�er. Balsamerare har en stor insikt i den m�nskliga anatomin och en stor samling groteska redskap och v�tskor f�r att preparera kroppar.";
	bakgrundstabeller.jargiensbefolkning[4].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[5] = {};
	bakgrundstabeller.jargiensbefolkning[5].rubrik="Bard";
	bakgrundstabeller.jargiensbefolkning[5].bestamd="barden";
	bakgrundstabeller.jargiensbefolkning[5].obestamd="en bard";
	bakgrundstabeller.jargiensbefolkning[5].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[5].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[5].socialafardigheterenheter=4
	bakgrundstabeller.jargiensbefolkning[5].beskrivning="Med flinka fingrar �ver en lyras str�ngar f�rr�ttar barden sitt v�rv. S�nger framf�rs som s�tter hj�rtan i brand, f�r t�rar att fl�da, leenden att sprida sig och skratt att klinga. Barden �r en sagober�ttare, s�ngare, poet och underh�llare. De mest misslyckade barderna �r inte mycket mer �n tiggare som i lappade kl�der spelar p� spruckna instrument. De mest lyckade framf�r uteslutande f�r de rikaste sl�kterna och till och med inf�r Kejsarens hov.";
	bakgrundstabeller.jargiensbefolkning[5].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter R�relsef�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[6] = {};
	bakgrundstabeller.jargiensbefolkning[6].rubrik="Bestraffare";
	bakgrundstabeller.jargiensbefolkning[6].bestamd="bestraffaren";
	bakgrundstabeller.jargiensbefolkning[6].obestamd="en bestraffare";
	bakgrundstabeller.jargiensbefolkning[6].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[6].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[6].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[6].beskrivning="N�r lagen hinner ifatt brottslingar �r straffet ofta h�rt. H�nder ska kapas, tungor sk�ras ut och folk ska h�ngas fr�n galgen, halshuggas eller bringas om livet p� de s�tt som makthavarna d�mt. Detta �r bestraffarens v�rv. Denne lever st�ndigt n�ra d�den och �r allt som oftast utst�tt och fruktad. M�nga har sj�lva varit d�dsd�mda men blivit ben�dade i utbyte mot att bli bestraffare resten av livet.";
	bakgrundstabeller.jargiensbefolkning[6].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Stridsf�rdigheter, 2 po�ng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[7] = {};
	bakgrundstabeller.jargiensbefolkning[7].rubrik="Boktryckare";
	bakgrundstabeller.jargiensbefolkning[7].bestamd="boktryckaren";
	bakgrundstabeller.jargiensbefolkning[7].obestamd="en boktryckare";
	bakgrundstabeller.jargiensbefolkning[7].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[7].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[7].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[7].beskrivning="Med bl�ckst�nkta h�nder och en stressad uppsyn s� driver boktryckarna p� med sin produktion av att trycka b�cker �t kyrkan och privata akt�rer. De graverar och gjuter hela sidor �t g�ngen och deras hantverkarkonst ses p� med misstanke och �r mycket ogillade av skrivarna d� deras roll blir allt mer f�rsvagad ju fler b�cker som trycks.";
	bakgrundstabeller.jargiensbefolkning[7].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 2 po�ng Hantverk."


	bakgrundstabeller.jargiensbefolkning[8] = {};
	bakgrundstabeller.jargiensbefolkning[8].rubrik="Bos�ttare";
	bakgrundstabeller.jargiensbefolkning[8].bestamd="bos�ttaren";
	bakgrundstabeller.jargiensbefolkning[8].obestamd="en bos�ttare";
	bakgrundstabeller.jargiensbefolkning[8].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[8].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[8].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[8].beskrivning="De jargiska kolonierna beh�ver st�ndigt nya inv�nare som brukar jorden, sl�ss mot urbefolkningen och sprider Daaks bud. En del blir lockade om l�ften om ett b�ttre liv, andra tvingas till utvandring. M�nga �r fattiga familjer som lever p� gr�nsen till sv�lt varje dag och m�ste slita h�rt f�r att bygga upp torp och hela samh�llen.";
	bakgrundstabeller.jargiensbefolkning[8].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[9] = {};
	bakgrundstabeller.jargiensbefolkning[9].rubrik="Brottsling";
	bakgrundstabeller.jargiensbefolkning[9].bestamd="brottslingen";
	bakgrundstabeller.jargiensbefolkning[9].obestamd="en brottsling";
	bakgrundstabeller.jargiensbefolkning[9].pluralobestamd="brottslingar";
	bakgrundstabeller.jargiensbefolkning[9].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[9].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[9].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[9].beskrivning="Det finns lagar och regler f�r allt. Vad man f�r �ta, var man f�r sova, vad man f�r handla med, vad man f�r s�ga, vad man f�r skriva, vad man f�r t�nka. Brottslingen g�r det till praxis att bryta mot de lagar som passar f�r att kunna tj�na sitt uppeh�lle. Det handlar ofta om smuggling, inbrott, r�n och beskyddarverksamhet.";
	bakgrundstabeller.jargiensbefolkning[9].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter R�relsef�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[10] = {};
	bakgrundstabeller.jargiensbefolkning[10].rubrik="Censor";
	bakgrundstabeller.jargiensbefolkning[10].bestamd="censorn";
	bakgrundstabeller.jargiensbefolkning[10].obestamd="en censor";
	bakgrundstabeller.jargiensbefolkning[10].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[10].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[10].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[10].beskrivning="I Kejsard�met finns m�nga viljor som drar folket i olika riktningar och det �r inte alltid alla dessa viljor tj�nar de styrandes intressen. M�nga f�rfattare, sk�despelare och filosofer har tankar och id�er som allvarligt skulle kunna skada den jargiska ordningen och d�rf�r finns det s� kallade censorer som arbetar med att granska verk som skapas i Kejsard�met och se till att ingenting sprids som kan rubba maktbalansen.";
	bakgrundstabeller.jargiensbefolkning[10].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[11] = {};
	bakgrundstabeller.jargiensbefolkning[11].rubrik="Consultator";
	bakgrundstabeller.jargiensbefolkning[11].bestamd="consultatorn";
	bakgrundstabeller.jargiensbefolkning[11].obestamd="en consultator";
	bakgrundstabeller.jargiensbefolkning[11].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[11].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[11].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[11].beskrivning="Det komplicerade jargiska systemet �r en o�versk�dlig spindelv�v av lagar och paragrafer och det �r consultatorns uppgift att dra i tr�darna f�r att f� byr�kratin att agera p� det s�tt man �nskar. Consultatorn agerar som advokat och r�dgivare och alla st�rre sl�kter har ett flertal consultatorer i sin tj�nst. Ett f�tal av dessa anv�nder systemet f�r att skapa r�ttvisa medan de flesta ser det som ett s�tt att fylla sina egna kistor.";
	bakgrundstabeller.jargiensbefolkning[11].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[12] = {};
	bakgrundstabeller.jargiensbefolkning[12].rubrik="Dansare";
	bakgrundstabeller.jargiensbefolkning[12].bestamd="dansaren";
	bakgrundstabeller.jargiensbefolkning[12].obestamd="en dansare";
	bakgrundstabeller.jargiensbefolkning[12].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[12].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[12].kanneteckenpoang=2;
	bakgrundstabeller.jargiensbefolkning[12].beskrivning="I sk�despel om Kejsard�mets storhetstid framf�r dansarna episka strider framf�r �sk�darna. P� smutsiga tavernor i talgljusens sotiga sken dansar sk�kor f�r druckna legion�rer som kastar mynt vid deras f�tter. I �dlingarnas palats framtr�der b�de kvinnor och m�n, med sina smidiga kroppar inoljade och pudrade med gyllene stoft. Alla r�r de sig virvlande till rytmen av Kejsard�mets taktfasta hj�rtslag.";
	bakgrundstabeller.jargiensbefolkning[12].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter R�relsef�rdigheter, 2 po�ng K�nnetecken."

	
	bakgrundstabeller.jargiensbefolkning[13] = {};
	bakgrundstabeller.jargiensbefolkning[13].rubrik="Demagog";
	bakgrundstabeller.jargiensbefolkning[13].bestamd="demagogen";
	bakgrundstabeller.jargiensbefolkning[13].obestamd="en demagog";
	bakgrundstabeller.jargiensbefolkning[13].valfriatabellslag=1;
	bakgrundstabeller.jargiensbefolkning[13].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[13].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[13].beskrivning="Ord kan flytta berg, r�ra folkmassor till handling och f� katastrofer att l�ta som gl�djebud. En del demagoger �r inte mer �n skr�vlare som uppmanar folk till handling, andra �r anstiftare till blodiga uppror, karismatiska sektledare eller s�dana som �lskar att skapa konflikter. N�gra �r talesm�n f�r akademier eller inflytelserika familjer i Kejsard�met men m�nga finner sig jagade och ansatta av makthavarna som ogillar deras l�sa tungor.";
	bakgrundstabeller.jargiensbefolkning[13].beskrivninghak = "1 slag p� valfri tabell, 4 enheter Sociala f�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[14] = {};
	bakgrundstabeller.jargiensbefolkning[14].rubrik="Dibukkultist";
	bakgrundstabeller.jargiensbefolkning[14].bestamd="dibukkultisten";
	bakgrundstabeller.jargiensbefolkning[14].obestamd="en dibukkultist";
	bakgrundstabeller.jargiensbefolkning[14].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[14].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[14].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[14].beskrivning="Allt som lever ska d�. Alla blommor ska vittra. De som dyrkar d�dsguden Dibuk ser sanningen. De ser Kejsard�mets s�ndervittrade fasader, de fattigas magra kroppar, de rikas sv�llande bukar. Allt har sin storhetstid och allt har sitt slut. I sm� skaror samlas kultisterna under falska identiteter f�r att dyrka d�dens och det kommande slutets gud, Dibuk. Vissa g�r direkt mot d�dens kalla famn medan andra l�mnas kvar f�r att leda folket till fr�lsning.";
	bakgrundstabeller.jargiensbefolkning[14].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter R�relsef�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[15] = {};
	bakgrundstabeller.jargiensbefolkning[15].rubrik="Domedagspredikant";
	bakgrundstabeller.jargiensbefolkning[15].bestamd="domedagspredikanten";
	bakgrundstabeller.jargiensbefolkning[15].obestamd="en domedagspredikant";
	bakgrundstabeller.jargiensbefolkning[15].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[15].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[15].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[15].beskrivning="Den sista tiden n�rmar sig. Tecknen blir allt fler och snart kommer den m�rke Malgoarh och hans demoner att st�rta in i v�rlden och alla som inte �r svurna till Daak kommer slitas i stycken och torteras i all evighet. Domedagspredikanterna inser detta och f�rs�ker med h�ngivelse, f�rkunnanden och �ppna predikningar varna folket. Domedagspredikanterna kan man se p� torg, vandrande mellan st�der och utanf�r kyrkorna.";
	bakgrundstabeller.jargiensbefolkning[15].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[16] = {};
	bakgrundstabeller.jargiensbefolkning[16].rubrik="D�dgr�vare";
	bakgrundstabeller.jargiensbefolkning[16].bestamd="d�dgr�varen";
	bakgrundstabeller.jargiensbefolkning[16].obestamd="en d�dgr�vare";
	bakgrundstabeller.jargiensbefolkning[16].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[16].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[16].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[16].beskrivning="Allt d�r f�rr eller senare. De rika s�tter mat i halsen och de fattiga sv�lter ihj�l. F�r d�dgr�varen spelar det ingen roll � alla ska de ned i jorden. Gravar skottas upp, kroppar s�nks ned och jord skyfflas �ver. En del tar extra tid och placerar en blomma p� graven och s�ger en b�n � andra plundrar de d�da p� allt de har och vissa s�ljer kroppar eller delar av kroppar till ljusskygga individer. D�dgr�vare �r sedda p� med misstro d� det finns m�nga sagor och s�nger d�r d�dgr�vare s�gs st� i f�rbund med m�rkrets makter.";
	bakgrundstabeller.jargiensbefolkning[16].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter R�relsef�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[17] = {};
	bakgrundstabeller.jargiensbefolkning[17].rubrik="Exaktor";
	bakgrundstabeller.jargiensbefolkning[17].bestamd="exaktorn";
	bakgrundstabeller.jargiensbefolkning[17].obestamd="en exaktor";
	bakgrundstabeller.jargiensbefolkning[17].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[17].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[17].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[17].beskrivning="Kejsard�met h�lls vid liv av det st�ndiga fl�det av silver och exaktorn �r en skatteindrivare och fogde som ser till att skatten betalas in. Exaktorns h�nder �r vanligen upptagna med st�mplade och bl�ckfl�ckiga pergament och laghandlingar men de �r minst lika upptagna med att ta emot silver f�r att �ndra i dessa dokument s� att skattetrycket inte blir s� h�rt f�r dem som har r�d att betala.";
	bakgrundstabeller.jargiensbefolkning[17].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[18] = {};
	bakgrundstabeller.jargiensbefolkning[18].rubrik="Fiskare";
	bakgrundstabeller.jargiensbefolkning[18].bestamd="fiskaren";
	bakgrundstabeller.jargiensbefolkning[18].obestamd="en fiskare";
	bakgrundstabeller.jargiensbefolkning[18].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[18].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[18].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[18].beskrivning="P� floder, sj�ar och vid Igonhavets grunda str�nder kan man se fiskarnas b�tar. Vattnet �r deras levebr�d. Fr�n djupet drar de upp sprattlande fiskar som gl�nser likt silver i solskenet. De lagar sina n�t p� st�llningar vid str�nderna och r�ker, saltar och j�ser sin f�ngst. M�nga �r vidskepliga och alla har de en respekt f�r v�drets makter, i synnerhet stormarna, som v�lter deras b�tar och offrar dem till djupet.";
	bakgrundstabeller.jargiensbefolkning[18].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Vildmarksf�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[19] = {};
	bakgrundstabeller.jargiensbefolkning[19].rubrik="Fj�rilsf�ngare";
	bakgrundstabeller.jargiensbefolkning[19].bestamd="fj�rilsf�ngaren";
	bakgrundstabeller.jargiensbefolkning[19].obestamd="en fj�rilsf�ngare";
	bakgrundstabeller.jargiensbefolkning[19].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[19].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[19].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[19].beskrivning="Ett vackrare namn f�r insektsj�gare �r de fj�rilsf�ngare som ser till att �dlingar f�r sova ost�rt p� n�tterna. Fladdrande malvingar, gnisslande syrsor och skrapandet av tusenfotingar kan st�ra s�mnen och fj�rilsf�ngarna g�r sitt b�sta f�r att tyst och metodiskt f�rgifta och ta ihj�l dem. Det finns �ven finare fj�rilsf�ngare, som samlar f�rgglada insekter f�r dess sk�nhets skull eller f�r att utvinna sekret till unika gifter och motgifter.";
	bakgrundstabeller.jargiensbefolkning[19].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter R�relsef�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[20] = {};
	bakgrundstabeller.jargiensbefolkning[20].rubrik="Flagellant";
	bakgrundstabeller.jargiensbefolkning[20].bestamd="flagellanten";
	bakgrundstabeller.jargiensbefolkning[20].obestamd="en flagellant";
	bakgrundstabeller.jargiensbefolkning[20].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[20].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[20].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[20].beskrivning="Kl�dd i trasor och med s�nderpiskad rygg vandrar flagellanten genom Kejsard�met. Denne �r uppfylld av den heliga Udars lidande och m�ssar osammanh�ngande f�r alla som vill lyssna. Vissa blir flagellanter efter religi�sa visioner, andra som straff f�r sina synder. F�r att visa p� Udars barmh�rtighet tar en del med sig f�r�ldral�sa barn i sitt f�lje och l�ter dessa leva p� allmosorna. De smetar in barnens kinder med sitt blod till dess att barnen �r gamla nog att sj�lva ta upp piskan och delta i sj�lvsp�kelsen � den heligaste av riter.";
	bakgrundstabeller.jargiensbefolkning[20].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Vildmarksf�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[21] = {};
	bakgrundstabeller.jargiensbefolkning[21].rubrik="Forskare";
	bakgrundstabeller.jargiensbefolkning[21].bestamd="forskaren";
	bakgrundstabeller.jargiensbefolkning[21].obestamd="en forskare";
	bakgrundstabeller.jargiensbefolkning[21].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[21].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[21].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[21].beskrivning="Knutna till l�ros�ten lever forskarna som arbetar f�r att f�rdjupa sin insikt runt m�nniskan, naturen, historia eller teologi. Vissa l�rda m�n och kvinnor f�r sin forskning sanktionerad av kyrkan, fr�mst de som specialiserat sig p� teologi. Andra lever i st�ndig skr�ck f�r att kyrkan eller censorerna ska beslagta deras alster och straffa dem f�r deras h�diska tankar och id�er.";
	bakgrundstabeller.jargiensbefolkning[21].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[22] = {};
	bakgrundstabeller.jargiensbefolkning[22].rubrik="F�ltsk�r";
	bakgrundstabeller.jargiensbefolkning[22].bestamd="f�ltsk�ren";
	bakgrundstabeller.jargiensbefolkning[22].obestamd="en f�ltsk�r";
	bakgrundstabeller.jargiensbefolkning[22].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[22].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[22].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[22].beskrivning="N�r det sker stridigheter d�r de flesta l�ngt efter slaget av sina skador. F�ltsk�ren f�rs�ker r�dda livet p� dessa. Denne l�kekunnige �r van att resa med legionerna eller h�ller sig n�ra borgar och gr�nsposteringar. F�ltsk�rer �r skickliga p� att stoppa bl�dningar, spj�lka ben och genomf�ra vissa enklare kirurgiska ingrepp men trots detta dukar m�nga av patienterna under och f� har sett s� mycket lidande i livets sista timmar som dessa m�n och kvinnor.";
	bakgrundstabeller.jargiensbefolkning[22].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Kunskapsf�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[23] = {};
	bakgrundstabeller.jargiensbefolkning[23].rubrik="F�rfalskare";
	bakgrundstabeller.jargiensbefolkning[23].bestamd="f�rfalskaren";
	bakgrundstabeller.jargiensbefolkning[23].obestamd="en f�rfalskare";
	bakgrundstabeller.jargiensbefolkning[23].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[23].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[23].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[23].beskrivning="Med ett skarpt �ga kopieras handstilar, sigillst�mplar och till och med formuleringar och dolda budskap av f�rfalskaren. I ett rike d�r dokument, sigill och kontrakt utg�r k�rnan i alla t�nkbara verksamheter har en skicklig f�rfalskare en m�jlighet att tj�na stora pengar. Straffet f�r f�rfalskning �r dock mycket h�rt och f�rfalskare arbetar d�rf�r ofta genom mellanh�nder om n�gon av kunderna skulle bli inf�ngad och tvingad att tala.";
	bakgrundstabeller.jargiensbefolkning[23].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Kunskapsf�rdigheter, 2 po�ng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[24] = {};
	bakgrundstabeller.jargiensbefolkning[24].rubrik="Gardessoldat";
	bakgrundstabeller.jargiensbefolkning[24].bestamd="gardessoldaten";
	bakgrundstabeller.jargiensbefolkning[24].obestamd="en gardessoldat";
	bakgrundstabeller.jargiensbefolkning[24].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[24].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[24].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[24].beskrivning="Gardessoldater kan ha mycket varierande uppgifter, vissa arbetar med att skydda en person eller en plats, andra arbetar f�r att tillintetg�ra en fientlig organisation eller r�relse. Garderna best�r oftast av elitsoldater som visat stor skicklighet inom ett visst omr�de och som av denna anledning blivit plockade fr�n sina tidigare anst�llningar f�r att tj�na ett h�gre syfte. Vanligtvis �r garderna finansierade av en mycket rik adelsman eller ett stort och m�ktigt gille f�r att tj�na deras syften.";
	bakgrundstabeller.jargiensbefolkning[24].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Stridsf�rdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.jargiensbefolkning[25] = {};
	bakgrundstabeller.jargiensbefolkning[25].rubrik="Gatuf�rs�ljare";
	bakgrundstabeller.jargiensbefolkning[25].bestamd="gatuf�rs�ljaren";
	bakgrundstabeller.jargiensbefolkning[25].obestamd="en gatuf�rs�ljare";
	bakgrundstabeller.jargiensbefolkning[25].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[25].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[25].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[25].beskrivning="Skrikandes om erbjudanden om f�rsk fisk, vackra tyger, nybakt br�d och v�ldoftande oljor st�r gatuf�rs�ljarna i sina sm� aff�rer f�r att locka in folkhopen f�r att k�pa deras varor. Med snabba ord som likt honung s�ker sig in i kundernas �ron s� s�ljer de sina varor till folket. De anv�nder alla knep som finns f�r att klara vardagen och samtidigt f�rs�ka h�lla uppe sitt rykte till morgondagen.";
	bakgrundstabeller.jargiensbefolkning[25].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[26] = {};
	bakgrundstabeller.jargiensbefolkning[26].rubrik="Gisslan";
	bakgrundstabeller.jargiensbefolkning[26].bestamd="gisslan";
	bakgrundstabeller.jargiensbefolkning[26].obestamd="en gisslan";
	bakgrundstabeller.jargiensbefolkning[26].pluralobestamd="gisslan";
	bakgrundstabeller.jargiensbefolkning[26].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[26].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[26].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[26].beskrivning="Det finns inga f�ngelser i Kejsard�met, men �nd� finns det f�ngna personer som �r f�r viktiga eller anv�ndbara f�r att d�das. Dessa fungerar vanligen som gisslan mellan rika sl�kter, en s�kerhet att man fullf�ljer sin del av avtalen. Gisslan kan i v�rsta fall h�llas i kalla och fuktiga k�llarh�lor, men i de flesta fall f�r de arbeta i hush�llet eller bo i ensliga kloster. Riktig betydelsefull gisslan kan leva som �rade g�ster i st�tliga borgar. Deras liv h�nger dock p� sina v�rdars v�lvilja och n�r som helst kan de tas av daga.";
	bakgrundstabeller.jargiensbefolkning[26].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[27] = {};
	bakgrundstabeller.jargiensbefolkning[27].rubrik="Gladiator";
	bakgrundstabeller.jargiensbefolkning[27].bestamd="gladiatorn";
	bakgrundstabeller.jargiensbefolkning[27].obestamd="en gladiator";
	bakgrundstabeller.jargiensbefolkning[27].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[27].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[27].kanneteckenpoang=2;
	bakgrundstabeller.jargiensbefolkning[27].beskrivning="Till publikens jubel st�rtar k�mpar samman. St�l m�ter st�l, blod spills, ben bryts och n�r allt �r �ver st�r en segrare upp med sitt vapen h�jt mot skyn. Gladiatorn �r en k�mpe som sl�ss f�r att underh�lla i v�lkoreograferade strider gentemot sina vapenbr�der. N�r man inte m�ter m�nskliga motst�ndare sl�pps monster och bestar in p� arenan och gladiatorerna tillintetg�r d� dessa styggelser i Daaks namn. De mest v�lk�nda gladiatorerna �r hyllade som hj�ltar och deras namn �r spridda �nda till kolonierna. De ok�nda sl�ss p� mindre arenor och �r vanligen de som �r f�rutbest�mda att f�rlora i de allt som oftast uppgjorda striderna.";
	bakgrundstabeller.jargiensbefolkning[27].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Stridsf�rdigheter, 2 po�ng K�nnetecken."

	
	bakgrundstabeller.jargiensbefolkning[28] = {};
	bakgrundstabeller.jargiensbefolkning[28].rubrik="Glutharian";
	bakgrundstabeller.jargiensbefolkning[28].bestamd="glutharianen";
	bakgrundstabeller.jargiensbefolkning[28].obestamd="en glutharian";
	bakgrundstabeller.jargiensbefolkning[28].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[28].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[28].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[28].beskrivning="Mat, vin, orgier, droger, vild kopulering och oh�mmad njutning utg�r k�rnan i glutharianens liv. Denna hedniska tro d�r man �r p� en st�ndig jakt efter njutningen p� de mest perversa s�tt �r vanlig bland de rika i det jargiska samh�llet. Trots utbredningen av kulten g�r s�llan inkvisitionen n�gra st�rre tillslag gentemot dem och det ryktas att ett flertal av anh�ngarna �r m�n och kvinnor av kyrkan.";
	bakgrundstabeller.jargiensbefolkning[28].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[29] = {};
	bakgrundstabeller.jargiensbefolkning[29].rubrik="Gods�gare";
	bakgrundstabeller.jargiensbefolkning[29].bestamd="gods�garen";
	bakgrundstabeller.jargiensbefolkning[29].obestamd="en gods�gare";
	bakgrundstabeller.jargiensbefolkning[29].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[29].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[29].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[29].beskrivning="F�r m�nga �r bilden av en gods�gare en man eller kvinna som med ett sorgl�st leende och blickar ut �ver f�lten d�r slavarna arbetar medan denne ligger p� divanen och blir matad med druvor. Det finns n�gra som har detta enkla liv med pengar, rikedom och makt men l�ngt ifr�n alla. M�nga �r h�rt arbetande och inblandade i gr�nstvister med sina grannar, n�got som ibland �verg�r till regelr�tta stridigheter.";
	bakgrundstabeller.jargiensbefolkning[29].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Kunskapsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[30] = {};
	bakgrundstabeller.jargiensbefolkning[30].rubrik="Grovarbetare";
	bakgrundstabeller.jargiensbefolkning[30].bestamd="grovarbetaren";
	bakgrundstabeller.jargiensbefolkning[30].obestamd="en grovarbetare";
	bakgrundstabeller.jargiensbefolkning[30].valfriatabellslag=1;
	bakgrundstabeller.jargiensbefolkning[30].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[30].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[30].beskrivning="Yxor biter in i tr�dstammarna, hackor och hammare frig�r marmor fr�n stenbrotten och murar och byggnader byggs av ren mankraft. Grovarbetarna �r de som utf�r det tyngsta arbetet i Kejsard�met. De �r k�nda f�r kamratskap och envishet. Arbetslagen sliter i b�de regn och gassande sol och sover sedan tungt i kojorna ute i vildmarken. N�r s�songen �r �ver �terv�nder de till sin familj med pengar eller till st�derna i jakt p� nytt arbete.";
	bakgrundstabeller.jargiensbefolkning[30].beskrivninghak = "1 slag p� valfri tabell, 4 enheter Vildmarksf�rdigheter, 2 po�ng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[31] = {};
	bakgrundstabeller.jargiensbefolkning[31].rubrik="Gr�tare";
	bakgrundstabeller.jargiensbefolkning[31].bestamd="gr�taren";
	bakgrundstabeller.jargiensbefolkning[31].obestamd="en gr�tare";
	bakgrundstabeller.jargiensbefolkning[31].valfriatabellslag=1;
	bakgrundstabeller.jargiensbefolkning[31].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[31].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[31].beskrivning="N�r en person d�tt vars sl�ktingar �r bland de bemedlade s� anlitar dessa gr�tare f�r att s�rja den d�de. Dessa m�n och kvinnor kl�r sig i askgr� kl�der, skriker, gr�ter och sl�pper ut sorg och v�nda. De sjunger �ven elegier, begravningshymner och ber till Daak att vaka �ver den bortg�ngne. Ofta f�rr�ttar de sitt v�rv utanf�r den d�des hus eller vandrar efter stadens gator och skriker den d�des namn.";
	bakgrundstabeller.jargiensbefolkning[31].beskrivninghak = "1 slag p� valfri tabell, 4 enheter Sociala f�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[32] = {};
	bakgrundstabeller.jargiensbefolkning[32].rubrik="Gycklare";
	bakgrundstabeller.jargiensbefolkning[32].bestamd="gycklaren";
	bakgrundstabeller.jargiensbefolkning[32].obestamd="en gycklare";
	bakgrundstabeller.jargiensbefolkning[32].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[32].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[32].kanneteckenpoang=2;
	bakgrundstabeller.jargiensbefolkning[32].beskrivning="Enkla n�jen f�r enkla m�nniskor. Gycklare underh�ller det vanliga folket med allehanda konster s�som akrobatik, jonglering, eldbl�sning och eldslukning samt enklare fakirtrick. M�nga gycklare vandrar mellan st�derna f�r att finna nya platser d�r folk �nnu inte sett deras upptr�dande och dessa uppm�rksamma personer f�r med sig skvaller och nyheter fr�n Kejsard�mets alla h�rn.";
	bakgrundstabeller.jargiensbefolkning[32].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter R�relsef�rdigheter, 2 po�ng K�nnetecken."

	
	bakgrundstabeller.jargiensbefolkning[33] = {};
	bakgrundstabeller.jargiensbefolkning[33].rubrik="Hamnarbetare";
	bakgrundstabeller.jargiensbefolkning[33].bestamd="hamnarbetaren";
	bakgrundstabeller.jargiensbefolkning[33].obestamd="en hamnarbetare";
	bakgrundstabeller.jargiensbefolkning[33].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[33].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[33].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[33].beskrivning="N�ra botten av samh�llets pyramid befinner sig hamnarbetarna och de utf�r den grova arbetsinsats som kr�vs f�r att stuva lasten p� fartyg. De syns st�ndigt b�rande p� tunga s�ckar eller l�rar eller fast i timtal vandrandes i hamnens kranhjul. De �r r�barkade typer med ytterst lite fritid som de dock g�rna spenderar drickandes p� billiga tavernor, st�ndigt beredda p� slagsm�l. Hamnarbetare har stor koll p� vad f�r last olika skepp och lagerbyggnader har i sina m�rka utrymmen och f�r n�gra extra stop �l p� krogen blir de ofta ben�gna att ber�tta mer om lasten �n dess �gare skulle acceptera.";
	bakgrundstabeller.jargiensbefolkning[33].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Stridsf�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[34] = {};
	bakgrundstabeller.jargiensbefolkning[34].rubrik="Hantverkare";
	bakgrundstabeller.jargiensbefolkning[34].bestamd="hantverkaren";
	bakgrundstabeller.jargiensbefolkning[34].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[34].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[34].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[34].beskrivning="I st�derna lever hantverkarna indelade i olika gillen. De mest inflytelserika hantverkarna �r gillesm�stare vilka anses vara n�gra av stadens m�ktigaste m�n som sitter p� b�de rikligt med pengar och otaliga hantverkshemligheter. De som har l�gst inflytande �r l�rlingar vilka under flera �rs tid f�r arbeta likt slavar �t n�gon av de andra medlemmarna i hopp om att l�ra sig v�rvet.";
	bakgrundstabeller.jargiensbefolkning[34].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter R�relsef�rdigheter, 2 po�ng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[35] = {};
	bakgrundstabeller.jargiensbefolkning[35].rubrik="H�mnare";
	bakgrundstabeller.jargiensbefolkning[35].bestamd="h�mnaren";
	bakgrundstabeller.jargiensbefolkning[35].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[35].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[35].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[35].beskrivning="�ra och heder �r det dyrbaraste som finns f�r en jargier. F�rlorad heder kan vara sv�rt att �terf�, men det finns speciella h�mnare som kallas okuro eller avengor som �r vapenkunniga och �r experter p� att skada sina offers anseende. Vanligt �r ocks� att h�mnarnas offer utmanas p� en duell p� liv och d�d. Andra metoder som h�mnarna kan anv�nda �r att sl� till mot offrets anh�riga, eller rent av utf�ra hedersmord. Normalt har en magistrat utf�rdat en speciell konfiskeringsorder som g�ller just �terb�rdandet av f�rlorad �ra, heder eller r�ttigheter.";
	bakgrundstabeller.jargiensbefolkning[35].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter R�relsef�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[36] = {};
	bakgrundstabeller.jargiensbefolkning[36].rubrik="H�xa";
	bakgrundstabeller.jargiensbefolkning[36].bestamd="h�xan";
	bakgrundstabeller.jargiensbefolkning[36].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[36].mystikfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[36].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[36].beskrivning="Kvinnor och m�n som genom pakter med Antimon lyckats f� krafter bortom det m�nskliga. Vissa s�gs kunna bota sjukdomar som h�rjar och andra kan f� stolar och katter att flyga runt som f�glar. S� gott som alla �r magi- och l�kekunniga med en insikt i de f�rdolda. Enligt inkvisitionen s�gs de m�rka makterna ha fl�ckat dessa personer p� n�got s�tt och det �r endast genom dessa tecken som man kan veta med s�kerhet om en person verkligen �r en �kta h�xa. Olikf�rgade �gon, krumma ryggar eller svarta fl�ckar fr�n de punkter d�r den onde ber�rt dem ses som bevis.";
	bakgrundstabeller.jargiensbefolkning[36].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Mystikf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[37] = {};
	bakgrundstabeller.jargiensbefolkning[37].rubrik="H�xj�gare";
	bakgrundstabeller.jargiensbefolkning[37].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[37].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[37].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[37].beskrivning="Det finns m�nga fasor i Kejsard�met. P� gamla kyrkog�rdar vaknar de d�da, i avl�gsna byar blir folk besatta av andev�sen som kommer om natten, desperata personer sv�r sig till demoner utan att veta vilket pris de kommer tvingas betala. H�xj�garen �r en person som tagit det som sin uppgift att finna och tillintetg�ra m�rkrets makter. En del av dessa arbetar under en inkvisitor, andra �r sj�lva jagade av inkvisitionen.";
	bakgrundstabeller.jargiensbefolkning[37].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[38] = {};
	bakgrundstabeller.jargiensbefolkning[38].rubrik="Indrivare";
	bakgrundstabeller.jargiensbefolkning[38].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[38].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[38].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[38].beskrivning="Aggression, hotfullhet och ett respektingivande yttre �r meriter hos indrivare i de l�gre samh�llsklasserna. Bland de mer f�rm�gna �r det v�ltalighet kryddad med dolda hot, skicklig dokumentation och en insikt i l�ntagarens tillg�ngar det som fungerar b�st. Deras roll �r dock densamma; att utl�nade pengar kommer tillbaka till sin �gare. Om detta s� l�ses med att fingrar bryts och t�nder sl�s ut eller att aff�rer saboteras, familjer hotas och egendom br�nns ned beror helt och h�llet p� situationen och summans storlek.";
	bakgrundstabeller.jargiensbefolkning[38].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Sociala f�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[39] = {};
	bakgrundstabeller.jargiensbefolkning[39].rubrik="Inkvisitor";
	bakgrundstabeller.jargiensbefolkning[39].bestamd="inkvisitorn";
	bakgrundstabeller.jargiensbefolkning[39].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[39].mystikfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[39].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[39].beskrivning="K�ttare, syndare, h�xor, hedningar och svartkonstn�rer finns �verallt. Inkvisitionen har svurit att finna dessa och rena dem, straffa dem eller d�da dem och p� s� s�tt h�lla Kejsard�met tryggt. Inkvisitorerna letar efter tecken p� syndare och tar in dessa p� f�rh�r. De nystar i f�rbjudna sammanslutningar, bevakar tvivelaktiga individer och i deras �k�nda tortyrkammare pressas sanningen fram med gl�dgade t�nger. Inkvisitorer �r fruktade av alla. Det finns m�nga som missbrukar sin makt medan andra f�r en modig kamp gentemot demoner och �vernaturliga styggelser f�r att h�lla de troende s�kra.";
	bakgrundstabeller.jargiensbefolkning[39].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Mystikf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[40] = {};
	bakgrundstabeller.jargiensbefolkning[40].rubrik="Jordbrukare";
	bakgrundstabeller.jargiensbefolkning[40].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[40].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[40].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[40].beskrivning="Kejsard�met h�lls vid liv av dem som brukar jorden. Dessa s�r f�lten, vallar boskapen och frambringar den stora m�ngd spannm�l och k�tt som fraktas till st�derna p� oxdragna vagnar. Under sv�lt�r �r livet p� landet mycket h�rt men n�r sk�rden �r god lever m�nga gott och de som �r lite mer bemedlade kan hyra in arbetare som dagl�nare eller har slavar som utf�r en del av arbetet.";
	bakgrundstabeller.jargiensbefolkning[40].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Vildmarksf�rdigheter, 2 po�ng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[41] = {};
	bakgrundstabeller.jargiensbefolkning[41].rubrik="J�gare";
	bakgrundstabeller.jargiensbefolkning[41].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[41].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[41].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[41].beskrivning="I vildmarken vid Kejsard�mets gr�nstrakter lever dessa simpla m�nniskor p� sin skicklighet med spjut och b�ge. D� och d� reser de tillbaka till st�derna eller byarna med hudar, k�tt eller hantverk i horn och ben. Vissa j�gare arbetar ensamma men andra v�ljer att ansluta sig till jaktlag som tillsammans driver och f�ller bytet.";
	bakgrundstabeller.jargiensbefolkning[41].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[42] = {};
	bakgrundstabeller.jargiensbefolkning[42].rubrik="Kartograf";
	bakgrundstabeller.jargiensbefolkning[42].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[42].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[42].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[42].beskrivning="F�r k�pm�nnen, �dlingarna, kyrkan, arm�n och givetvis Kejsaren har det alltid varit viktigt att veta hur geografin i riket och kolonierna ser ut. Kartograferna kan provinsernas gr�nser, v�gar, vattendrag, floder, skogar, �kerareal samt �ven vilka l�nder som finns bortom haven, de nordliga bergen, sl�tterna och den f�rhatliga ask�knen Tarkas. M�nga kartografer f�retar sig i sin ungdom dramatiska och farliga resor i Kejsard�mets utkanter.";
	bakgrundstabeller.jargiensbefolkning[42].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Kunskapsf�rdigheter, 2 po�ng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[43] = {};
	bakgrundstabeller.jargiensbefolkning[43].rubrik="Konfiskat�r";
	bakgrundstabeller.jargiensbefolkning[43].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[43].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[43].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[43].beskrivning="�godelar, varor och pengar p� villov�gar ska naturligtvis beslagtas och �terb�rdas till sin r�ttm�tiga �gare. Oftast r�r det sig om n�gon form av egendom som stulits, f�rskingrats eller �verl�tits till en ny �gare. En konfiskat�r eller apprendator st�djer sig p� en konfiskationsorder som utf�rdats av en magistrat och f�r normalt provision i efterhand � allt fr�n en tiondel till h�lften av godsets v�rde.";
	bakgrundstabeller.jargiensbefolkning[43].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[44] = {};
	bakgrundstabeller.jargiensbefolkning[44].rubrik="Konkubin";
	bakgrundstabeller.jargiensbefolkning[44].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[44].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[44].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[44].beskrivning="Konkubiner �r mer �n vanliga sk�kor d� de tar hutl�sa summor f�r sitt umg�nge och blir s�ledes �lskarinnor och �lskare till de allra mest f�rm�gna och inflytelserika. Konkubinerna m�ste alltid str�va efter att beh�lla gunsten och intresset d� detta �r deras levebr�d och m�nga �r d�rf�r experter n�r det g�ller f�rf�relse eller ut�vandet av mer ovanliga sexuella akter. Andra har kommit att bli intuitiva och intelligenta r�dgivare.";
	bakgrundstabeller.jargiensbefolkning[44].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[45] = {};
	bakgrundstabeller.jargiensbefolkning[45].rubrik="Kunskapare";
	bakgrundstabeller.jargiensbefolkning[45].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[45].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[45].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[45].beskrivning="I tj�nst �t n�gon uppsatt, vanligen n�gon inom kyrkan, hovet, en av sl�kterna, ett handelshus eller kanske till och med ett fr�mmande rike spionerar kunskaparen p� sina m�l och s�nder tillbaka detaljerade rapporter om vad som p�g�r. En del kunskapare �r inte mer �n tj�nare som f�r n�gra extra guld genom att ber�tta vad dennes herrar har f�r sig medan andra kunskapare har tr�nats i sitt v�rv sedan barnsben.";
	bakgrundstabeller.jargiensbefolkning[45].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter R�relsef�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[46] = {};
	bakgrundstabeller.jargiensbefolkning[46].rubrik="Kurirryttare";
	bakgrundstabeller.jargiensbefolkning[46].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[46].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[46].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[46].beskrivning="I det v�ldiga Kejsard�met f�rdas nyheter l�ngsamt. N�r bud m�ste skickas med hast eller nyheter m�ste spridas till rikets alla inv�nare s�nds kurirryttare mellan st�derna. De spikar upp plakat, levererar sigillf�rseglade brev och viskar kodade budskap till utvalda personer. S� gott som alla stora sl�kter har egna kurirryttare, likas� kyrkan och arm�n.";
	bakgrundstabeller.jargiensbefolkning[46].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter R�relsef�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[47] = {};
	bakgrundstabeller.jargiensbefolkning[47].rubrik="K�ttare";
	bakgrundstabeller.jargiensbefolkning[47].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[47].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[47].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[47].beskrivning="Det finns de som v�nt sitt ansikte fr�n Daaks sanna l�ra, de tvivlar p� kyrkans budskap och f�rnekar Aboratens ord. Deras tro �verensst�mmer inte med den enda sanna och deras syn p� religionen spottar kyrkan och alla Daaks helgon i ansiktet. K�ttarna f�rs�ker hitta tvivlare, inf�r vilka de propagerar om sin sanning och s�r sina id�er. Det �r ett mycket farligt v�rv som drar till sig inkvisitionens uppm�rksamhet.";
	bakgrundstabeller.jargiensbefolkning[47].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[48] = {};
	bakgrundstabeller.jargiensbefolkning[48].rubrik="K�pman";
	bakgrundstabeller.jargiensbefolkning[48].bestamd="k�pmannen";
	bakgrundstabeller.jargiensbefolkning[48].pluralobestamd="k�pm�n";
	bakgrundstabeller.jargiensbefolkning[48].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[48].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[48].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[48].beskrivning="P� noga balanserade v�gar v�gs silver och guldhalten avg�rs genom att bita i mynten. K�pmannen s�ljer, byter och k�per varor och f�rs�ker pressa fram s� stor vinst som det bara �r m�jligt. Dj�rva chanstagningar, f�rsenade leveranser eller konkurrensen kan helt sl� ut en k�pman. I Kejsard�met �r de dock m�ngtaliga och de som dukar under �r snart bortgl�mda och nya giriga m�n och kvinnor tar deras plats.";
	bakgrundstabeller.jargiensbefolkning[48].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[49] = {};
	bakgrundstabeller.jargiensbefolkning[49].rubrik="Lamiakultist";
	bakgrundstabeller.jargiensbefolkning[49].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[49].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[49].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[49].beskrivning="I Jargien finns det m�nga sagor om lamiorna, de bleka vand�da som s�gs stryka runt nattetid och t�mma m�nniskor p� blod. De �r v�sen som f�rkastat Daak men genom m�rk magi vunnit sk�nhet, ofantlig styrka och evigt liv. Runt om i riket har det uppst�tt kulter som dyrkar dessa varelser i svarta m�ssor och blodsriter i hopp om att f� del av deras makt och kanske slutligen vinna od�dlighetens g�va.";
	bakgrundstabeller.jargiensbefolkning[49].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter R�relsef�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[50] = {};
	bakgrundstabeller.jargiensbefolkning[50].rubrik="Lantarbetare";
	bakgrundstabeller.jargiensbefolkning[50].valfriatabellslag=1;
	bakgrundstabeller.jargiensbefolkning[50].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[50].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[50].beskrivning="Lantarbetarna �r de l�gsta bland jordbrukarna. Det �r de som inte �ger vare sig jord eller egendom men f�r slita mest av alla p� f�lten. M�nnen sl�r sk�rden i gassande solsken, kvinnorna samlar upp den i k�rvar. F�r vallas av unga pojkar och flickor och n�r h�sten kommer gr�vs rovorna upp. M�nga dr�mmer om ett b�ttre liv d�r de �ger jorden som de sliter p� dag ut och dag in.";
	bakgrundstabeller.jargiensbefolkning[50].beskrivninghak = "1 slag p� valfri tabell, 4 enheter Vildmarksf�rdigheter, 2 po�ng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[51] = {};
	bakgrundstabeller.jargiensbefolkning[51].rubrik="Legosoldat";
	bakgrundstabeller.jargiensbefolkning[51].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[51].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[51].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[51].beskrivning="De krigare som inte ansluter sig till legionerna blir ofta legosoldater. Vissa �r f�re detta legion�rer som valt att g� sin egen v�g medan andra v�rvas direkt som unga m�n f�r att sl�ss i ett f�rband. Legosoldater reser land och rike runt f�r att sl�ss f�r dem som betalar b�st.";
	bakgrundstabeller.jargiensbefolkning[51].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[52] = {};
	bakgrundstabeller.jargiensbefolkning[52].rubrik="L�nnm�rdare";
	bakgrundstabeller.jargiensbefolkning[52].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[52].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[52].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[52].beskrivning="I Kejsard�met �r l�nnm�rdare ett popul�rt redskap f�r att undanr�ja o�nskade element. De kan r�ra sig om allt fr�n brutala knivsk�rare i hamnkvarteren till subtila giftm�rdare i hoven. Alla st�rre sl�kter har en eller flera personer i sin sold med denna specialitet. Dessa fungerar ofta som livvakter och r�dgivare som skydd mot andra l�nnm�rdare. Det �r ett yrke som kr�ver ett kallt hj�rta eller en passion f�r konstformen och Kejsard�met �r fyllt med s�v�l kallhj�rtade som passionerade individer.";
	bakgrundstabeller.jargiensbefolkning[52].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter R�relsef�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[53] = {};
	bakgrundstabeller.jargiensbefolkning[53].rubrik="Magiker";
	bakgrundstabeller.jargiensbefolkning[53].bestamd="magikern";
	bakgrundstabeller.jargiensbefolkning[53].pluralobestamd="magiker";
	bakgrundstabeller.jargiensbefolkning[53].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[53].mystikfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[53].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[53].beskrivning="St�ndigt p� flykt fr�n inkvisitionens grepp �r magikerna, beg�vade m�stare p� att manipulera v�rlden efter sin vilja. De bedriver sitt v�rv i hemlighet och m�nga har ett annat yrke som fasad. Det finns dock hemliga magiska s�llskap och m�nga inflytelserika kan t�nka sig att betala dyrt f�r att bruka den f�rbjudna magin s� l�nge de inte blir sammankopplade med magikern ifr�ga.";
	bakgrundstabeller.jargiensbefolkning[53].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Mystikf�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[54] = {};
	bakgrundstabeller.jargiensbefolkning[54].rubrik="Magistrat";
	bakgrundstabeller.jargiensbefolkning[54].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[54].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[54].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[54].beskrivning="I alla jargiska st�der och st�rre byar finns det en magistrat vilken �r h�gsta ansvarig f�r r�ttskipningen inom sitt omr�de. Denna inflytelserika person leder en allm�n domstol d�r alla tviste- och brottsm�l behandlas och i slut�ndan �r det magistraten som beslutar vilka som m�ste d�, vilka som m�ste betala och vilka som ska sl�ppas fria.";
	bakgrundstabeller.jargiensbefolkning[54].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[55] = {};
	bakgrundstabeller.jargiensbefolkning[55].rubrik="Medikus";
	bakgrundstabeller.jargiensbefolkning[55].pluralobestamd="medikusar";
	bakgrundstabeller.jargiensbefolkning[55].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[55].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[55].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[55].beskrivning="N�r folk blir sjuka, ben m�ste spj�lkas och s�r m�ste sys tillkallas en medikus. Denne specialiserar sig p� kroppens mysterier och hur man botar �kommor genom �derl�tning, beska dekokter och stinkande salvor. Kunskapen om hur man n�r balans i kroppens v�tskor g�r dessa individer mycket respekterade.";
	bakgrundstabeller.jargiensbefolkning[55].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[56] = {};
	bakgrundstabeller.jargiensbefolkning[56].rubrik="Mission�r";
	bakgrundstabeller.jargiensbefolkning[56].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[56].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[56].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[56].beskrivning="Det finns s� m�nga otrogna i kolonierna, i fj�rran riken och i Kejsard�mets utkanter att kyrkans godhet inte klarar av att titta handfallet p� utan m�ste agera f�r deras sj�lars skull. Mission�ren �r en person av kyrkan, vanligen en munk, nunna, tempelriddare eller pr�st som tagit sig an ett heligt uppdrag att sprida Daaks bud �ver Mundana. Vissa mission�rer anv�nder t�lmodigt diplomati och visar p� Daaks v�lvilja medan andra f�redrar v�ldets v�g f�r att tvinga de otrogna till underkastelse � det handlar ju trots allt om att r�dda deras sj�lar.";
	bakgrundstabeller.jargiensbefolkning[56].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.jargiensbefolkning[57] = {};
	bakgrundstabeller.jargiensbefolkning[57].rubrik="Munk/nunna";
	bakgrundstabeller.jargiensbefolkning[57].bestamd="munken/nunnan";
	bakgrundstabeller.jargiensbefolkning[57].pluralobestamd="munkar/nunnor";
	
	bakgrundstabeller.jargiensbefolkning[57].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[57].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[57].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[57].beskrivning="De finns de troende som v�ljer att sv�ra sig till Daak och g�r med i ett kloster f�r att d�r tj�na honom. En del kloster ligger isolerade l�ngt ute p� landsbygden medan andra �r bel�gna mitt i st�der d�r man dagligen har kontakt med stadsborna. Vissa kloster �r mycket strikta med tysthetsl�fte och straff f�r minsta f�rseelse men i andra sker f�rbjudna ting bakom murarna och d�r handlar l�ftet snarare om att inte avsl�ja n�got f�r utomst�ende.";
	bakgrundstabeller.jargiensbefolkning[57].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.jargiensbefolkning[58] = {};
	bakgrundstabeller.jargiensbefolkning[58].rubrik="Munsk�nk";
	bakgrundstabeller.jargiensbefolkning[58].pluralobestamd="munsk�nkar";
	
	bakgrundstabeller.jargiensbefolkning[58].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[58].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[58].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[58].beskrivning="Ju h�gre status man har i Kejsard�met desto fler fiender f�r man och f�rgiftning �r en d�dsorsak som �r allt f�r vanlig hos de rika. Munsk�nkar �r personer med mycket k�nsliga smakl�kar som tr�nats i att uppt�cka gifter i mat och dryck. Genom att �ta en stund innan sin herre kan de utveckla f�rgiftningssymptom innan herren ens smakar maten. Dessa personer befinner sig mitt i de h�gre st�nden och har en inblick i m�nga av de g�rom�l som sker d�r.";
	bakgrundstabeller.jargiensbefolkning[58].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Vildmarksf�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[59] = {};
	bakgrundstabeller.jargiensbefolkning[59].rubrik="Ockrare";
	bakgrundstabeller.jargiensbefolkning[59].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[59].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[59].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[59].beskrivning="Guld och silver fl�dar genom Kejsard�met och de som inga pengar har kan inte komma l�ngt. Ockrarna �r personer som har en egen f�rm�genhet och som g�rna l�nar ut en summa mot en riklig r�nta. Det finns alltid de som vill g�ra aff�rer, beh�ver en medikus eller m�ste betala av en skuld. Om inte pengarna kommer tillbaka i tid s� tvingas ockraren ta hj�lp av indrivare f�r att skydda sin investering.";
	bakgrundstabeller.jargiensbefolkning[59].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.jargiensbefolkning[60] = {};
	bakgrundstabeller.jargiensbefolkning[60].rubrik="Ordensriddare";
	bakgrundstabeller.jargiensbefolkning[60].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[60].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[60].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[60].beskrivning="Svurna till Daak och omg�rdade av riter och mystik axlar ordensriddarna manteln som rikets beskyddare och Daaks f�rk�mpar. De �r respekterade och fruktade av folket d� deras makt ofta g�r dem on�bara f�r anklagelser vilket g�r att vissa inte drar sig f�r att anv�nda sitt inflytande f�r att ta det de vill utan r�dsla f�r repressalier. M�nga �r fanatiskt trogna den orden de tillh�r och att f�rsvara sin och dess �ra tar upp all deras tid.";
	bakgrundstabeller.jargiensbefolkning[60].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[61] = {};
	bakgrundstabeller.jargiensbefolkning[61].rubrik="Pilgrim";
	bakgrundstabeller.jargiensbefolkning[61].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[61].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[61].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[61].beskrivning="Till fots, ikl�dda enkla kl�der i dova f�rger med en pilgrimsstav i sin hand och ett Daakkors runt sin hals f�rdas pilgrimerna genom Kejsard�met. De �r obev�pnade d� Daak skyddar dem p� sin vandring mellan de heliga platserna. Vissa vandrar f�r att visa sin underkastelse till sin gud, andra f�r att g�ra bot. P� kn� ber de vid helgedomar, bes�ker orakel och helare, kysser marken d�r profeter har vandrat i hopp om att blidka den ende guden och vinna insikt.";
	bakgrundstabeller.jargiensbefolkning[61].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Kunskapsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[62] = {};
	bakgrundstabeller.jargiensbefolkning[62].rubrik="Prisj�gare";
	bakgrundstabeller.jargiensbefolkning[62].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[62].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[62].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[62].beskrivning="N�gra anv�nder sina kontakter och sitt skarpsinne, andra en s�llan sk�dad v�ldsamhet, men i slut�ndan �r prisj�garens, eller captatorns, enda m�l att f�nga in misst�nkta brottslingar och f�ra dem inf�r magistraten f�r att d�mas. Arresteringsordrar spikas upp p� v�ggar vid stadsportar eller l�ses upp av utropare och ju farligare byte och gr�vre brott desto mer silver kan de inbringa.";
	bakgrundstabeller.jargiensbefolkning[62].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter R�relsef�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[63] = {};
	bakgrundstabeller.jargiensbefolkning[63].rubrik="Protektor";
	bakgrundstabeller.jargiensbefolkning[63].bestamd="protektorn";
	bakgrundstabeller.jargiensbefolkning[63].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[63].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[63].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[63].beskrivning="Det finns m�nga v�rdefulla saker som beh�ver skyddas: personer, egendomar och f�rem�l. En protektor har till uppgift att mot betalning vaka �ver dessa och ta till vapen om s� skulle kr�vas. En del agerar som livvakter till bortsk�mda �dlingar, andra b�r och skyddar familjens sigillst�mplar och vissa �r anst�llda av handelshus f�r att se till att lasten kommer fram or�rd.";
	bakgrundstabeller.jargiensbefolkning[63].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter R�relsef�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[64] = {};
	bakgrundstabeller.jargiensbefolkning[64].rubrik="Pr�st";
	bakgrundstabeller.jargiensbefolkning[64].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[64].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[64].mystikfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[64].beskrivning="Utan Daaks v�gledning skulle folket bli f�rvildade och hedniska bestar d�mda till en evighet i sk�rselden efter d�den. Pr�sterna har till uppgift att r�dda deras sj�lar och hj�lpa folket att finna Daak. De h�ller i m�ssor, kommer med r�d och �r hj�lp och st�d till dem som har de sv�rt eller har drabbats av tvivel. M�nga har valt detta v�rv p� grund av deras tilltro till den ende guden och en vilja att g�ra gott men det finns de som drivs av girighet och politiska ambitioner och anv�nder tron som ett redskap f�r att manipulera sina anh�ngare och svartm�la sina fiender.";
	bakgrundstabeller.jargiensbefolkning[64].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 4 enheter Mystikf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[65] = {};
	bakgrundstabeller.jargiensbefolkning[65].rubrik="Reliks�ljare";
	bakgrundstabeller.jargiensbefolkning[65].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[65].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[65].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[65].beskrivning="Dit pilgrimerna f�rdas finner man reliks�ljarna likt surrande flugor runt ett ruttnande kadaver. Dessa s�ljer v�lsignade oljor, �godelar eller skelettbitar tillh�rande k�nda helgon, Daakkors, billiga helgonm�lningar, mumifierade delar av hedningar och allt annat de kan komma �ver och lura p� de troende. Dessa m�n och kvinnor har ett smort munl�der och en makaber samling f�rem�l i sin �go.";
	bakgrundstabeller.jargiensbefolkning[65].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Sociala f�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[66] = {};
	bakgrundstabeller.jargiensbefolkning[66].rubrik="R�ttf�ngare";
	bakgrundstabeller.jargiensbefolkning[66].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[66].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[66].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[66].beskrivning="St�derna sv�mmar �ver av r�ttor. De kr�lar i gr�nder, k�llare och kloaker. De tar sig in i de f�rn�msta husen och gnager s�nder dyrbara mattor, �ter det fattiga folkets f�rr�d och stj�l mat direkt fr�n v�rdshusens bord. R�ttf�ngarna �r trashankar som lever p� att f�nga in och ha ihj�l s� m�nga som m�jligt av dessa gnagare f�r n�gra kopparslantar i betalning. Vissa r�ttf�ngare passar p� att tj�na n�gra extra mynt genom att tillaga sin f�ngst och s�lja dem i fattigkvarteren.";
	bakgrundstabeller.jargiensbefolkning[66].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter R�relsef�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[67] = {};
	bakgrundstabeller.jargiensbefolkning[67].rubrik="Samarit";
	bakgrundstabeller.jargiensbefolkning[67].valfriatabellslag=1;
	bakgrundstabeller.jargiensbefolkning[67].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[67].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[67].beskrivning="Kejsard�met �r en obarmh�rtig plats och den som inte kan h�lla sig p� f�tter trampas ned. Gamla personer d�r ensamma i sina stugor, sjuka dukar under i feberfrossor och sp�dbarn skriker av hunger. Det finns dock de som svurit sina liv att bist� sjuka, lytta och modf�llda �ven om de inte kan betala f�r sig. Dessa barmh�rtiga m�nniskor finner man bland alla samh�llsklasser, till och med p� de mest ov�ntade st�llen.";
	bakgrundstabeller.jargiensbefolkning[67].beskrivninghak = "1 slag p� valfri tabell, 4 enheter Sociala f�rdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.jargiensbefolkning[68] = {};
	bakgrundstabeller.jargiensbefolkning[68].rubrik="Sj�farare";
	bakgrundstabeller.jargiensbefolkning[68].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[68].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[68].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[68].beskrivning="Saltet, brisen, m�sarnas skratt och str�mmarnas nyckfullhet. Ingenting g�r upp mot att m�ta soluppg�ngen p� ett majest�tiskt fartyg, h�gt uppe i riggen med en bit skeppsskorpa i ena handen och en flaska rom i den andra. Sj�fararna reser vida kring i sina gungande borgar. Det �r dock ett farligt v�rv; p� m�rka vatten hopas stormar och orkaner som kan slita de st�rsta skeppen i stycken. Djupt under ytan ligger monster och sj�odjur vilande i v�ntan p� att ett l�mpligt m�l med mat ska r�ka segla f�rbi.";
	bakgrundstabeller.jargiensbefolkning[68].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter R�relsef�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[69] = {};
	bakgrundstabeller.jargiensbefolkning[69].rubrik="Skrivare";
	bakgrundstabeller.jargiensbefolkning[69].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[69].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[69].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[69].beskrivning="Med bl�ckst�nk p� sina fingrar, en fj�derpenna i sitt grepp och b�jd rygg fylls ark efter ark med text. Skrivare finns �verallt i Kejsard�met. M�nga arbetar som tj�nstem�n i byr�kratin, andra skapar vackra kopior av k�nda b�cker eller skriver ned order fr�n milit�rer, handelsfurstar eller adelsm�n. D� de skriver av och kopierar m�nga texter och b�cker besitter de ofta en bred kunskap om m�nga olika �mnen och vissa har en insikt i aff�rer som inte b�r bli allm�nt k�nda.";
	bakgrundstabeller.jargiensbefolkning[69].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Kunskapsf�rdigheter, 2 po�ng Hantverk."

	
	
	bakgrundstabeller.jargiensbefolkning[70] = {};
	bakgrundstabeller.jargiensbefolkning[70].rubrik="Skulpt�r";
	bakgrundstabeller.jargiensbefolkning[70].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[70].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[70].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[70].beskrivning="De finns de som vigt sina liv �t att forma stenen och skapa vackra och imponerande konstverk. Dv�rgar har en fallenhet f�r denna konstform. Med tanke p� det outsinliga behov av stenarbeten som finns i Kejsard�met har m�nga m�nniskor uppn�tt minst lika stor skicklighet i detta v�rv. Vissa konstverk �r s� sk�na eller skr�ckinjagande att dess blotta existens gett upphov till rykten om vissa skulpt�rers makt att till och med ge sina skapelser liv.";
	bakgrundstabeller.jargiensbefolkning[70].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 valfria enheter, 2 po�ng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[71] = {};
	bakgrundstabeller.jargiensbefolkning[71].rubrik="Sk�ka";
	bakgrundstabeller.jargiensbefolkning[71].pluralobestamd="sk�kor";
	bakgrundstabeller.jargiensbefolkning[71].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[71].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[71].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[71].beskrivning="Lust, passion och frestelse f�rd�ms av kyrkan och de som mot betalning utf�r dessa tj�nster �r bespottade av s� gott som alla. Men lidelsen och lusten genomsyrar hela Kejsard�met och tvingar m�n och kvinnor som saknar andra medel att s�lja sina kroppar f�r att klara dagen. Det �r ett farligt v�rv d�r man riskerar att drabbas av sjukdomar, v�ldsamma kunder och f�r kvinnorna �ven o�nskade graviditeter.";
	bakgrundstabeller.jargiensbefolkning[71].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter R�relsef�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[72] = {};
	bakgrundstabeller.jargiensbefolkning[72].rubrik="Slav \(arbetare\)";
	bakgrundstabeller.jargiensbefolkning[72].bestamd="slaven";
	bakgrundstabeller.jargiensbefolkning[72].pluralobestamd="slavar";
	
	bakgrundstabeller.jargiensbefolkning[72].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[72].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[72].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[72].beskrivning="P� f�lt, i gruvor, vinlundar och skogar sliter slavarna under rappen fr�n sina arbetsledares piskor. De �r drivna till att utf�ra de tyngsta, farligaste och mest pl�gsamma arbetsuppgifterna. N�r kloakerna m�ste rensas, v�gar m�ste anl�ggas och instabila gruvor expanderas s� s�tts slavarna in. En del slavar har �gare som behandlar dem r�ttvist och sk�nker dem mat och ibland till och med n�jen. Andra behandlas n�stan som djur av grymma despoter vilka ser dem som en resurs som man l�tt kan byta ut.";
	bakgrundstabeller.jargiensbefolkning[72].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter R�relsef�rdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.jargiensbefolkning[73] = {};
	bakgrundstabeller.jargiensbefolkning[73].rubrik="Slav \(kurtisan\)";
	bakgrundstabeller.jargiensbefolkning[73].bestamd="kurtisanen";
	bakgrundstabeller.jargiensbefolkning[73].pluralobestamd="kurtisaner";
	
	bakgrundstabeller.jargiensbefolkning[73].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[73].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[73].kanneteckenpoang=2;
	bakgrundstabeller.jargiensbefolkning[73].beskrivning="Att ha en vacker slav vid sin sida som man kan njuta av eller dela med till sina v�nner ses som h�g status inom vissa dekadenta kretsar. Slaven ses allt som oftast som ett redskap endast avsett f�r njutning och som lika l�tt kan kasseras om den skulle sluta att roa eller g� s�nder. N�gra tr�nas till att behaga rika herrar efter allehanda konststycken, andra �r inte mer �n fastkedjade djur i smutsiga bordeller eller sl�pas efter trossen tillh�rande de olika krigsregementena.";
	bakgrundstabeller.jargiensbefolkning[73].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter R�relsef�rdigheter, 2 po�ng K�nnetecken."

	
	bakgrundstabeller.jargiensbefolkning[74] = {};
	bakgrundstabeller.jargiensbefolkning[74].rubrik="Slav \(l�rd\)";
	bakgrundstabeller.jargiensbefolkning[74].bestamd="slaven";
	bakgrundstabeller.jargiensbefolkning[74].pluralobestamd="slavar";
	
	bakgrundstabeller.jargiensbefolkning[74].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[74].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[74].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[74].beskrivning="Med skarpa intellekt, h�ngivenhet och uppm�rksamhet tj�nar de l�rda slavarna sina m�stare. De fungerar som l�rare �t barn i familjen, r�dgivare �t milit�rer eller r�knar ut de mest gynnsamma handelskontrakten med tillh�rande mutor. Dessa slavar har vanligen ett gott liv om �n ej i frihet d� de alla fruktar att p� n�got s�tt missbehaga sina herrar.";
	bakgrundstabeller.jargiensbefolkning[74].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 4 enheter R�relsef�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[75] = {};
	bakgrundstabeller.jargiensbefolkning[75].rubrik="Slav \(tj�nare\)";
	bakgrundstabeller.jargiensbefolkning[75].bestamd="tj�naren";
	bakgrundstabeller.jargiensbefolkning[75].pluralobestamd="tj�nare";
	
	bakgrundstabeller.jargiensbefolkning[75].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[75].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[75].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[75].beskrivning="De f�rm�gna m�ste passas upp. N�gon m�ste bada dem, torka deras kroppar, gnida in dem med v�ldoftande oljor, kl� dem i finaste tyger, l�gga fram besticken, sopa upp smutsen, polera silvret, r�tta till gobel�ngerna, mata dem med druvor och s�tsaker, springa med meddelanden, klippa deras naglar och vara i n�rheten f�r att h�rsamma deras befallningar. Allt detta �r tj�narnas uppgifter och har de tur kan de leva ett liv d�r de inte blir alltf�r pryglade och f�r �ta sig m�tta varje kv�ll.";
	bakgrundstabeller.jargiensbefolkning[75].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter R�relsef�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[76] = {};
	bakgrundstabeller.jargiensbefolkning[76].rubrik="Slav \(underh�llare\)";
	bakgrundstabeller.jargiensbefolkning[76].bestamd="underh�llaren";
	bakgrundstabeller.jargiensbefolkning[76].pluralobestamd="underh�llare";
	bakgrundstabeller.jargiensbefolkning[76].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[76].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[76].kanneteckenpoang=2;
	bakgrundstabeller.jargiensbefolkning[76].beskrivning="De som �r rika och inflytelserika m�ste f� skratta, gr�ta och f�rundras f�r att kunna gl�mma bort alla sina tyngande bekymmer. Underh�llaren har till uppgift att roa sina herrar. Det kan vara genom dans, s�ng, historieber�ttande, akrobatik eller trolleritrick. En del underh�llare �r inte mer �n vulg�ra narrar som skrockande ber�ttar fr�cka historier och l�ter sig bli hunsade. Andra �r personer vars s�nger b�r med sig sm�rtan fr�n f�ngenskapens ok och f�r t�rarna att rinna ned f�r �h�rarnas kinder. Dessa slavar skattas h�gt och �r f�r v�rdefulla f�r att sl�ppas fria.";
	bakgrundstabeller.jargiensbefolkning[76].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 2 po�ng K�nnetecken."

	
	bakgrundstabeller.jargiensbefolkning[77] = {};
	bakgrundstabeller.jargiensbefolkning[77].rubrik="Slavf�rmedlare";
	bakgrundstabeller.jargiensbefolkning[77].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[77].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[77].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[77].beskrivning="D� slavhandel �r f�rbjudet inom Kejsard�met och slavar delas ut via strikta byr�kratiska beslut finns det officiellt inga egentliga slavhandlare. D�remot finns det de m�n och kvinnor som har kontakter och hj�lper de rika se ut slavar som de vill ha och sedan ser till att skaffa dem, via mutor, p� byr�kratisk v�g eller via utl�ndska slavhandlare. En del slavf�rmedlare specialiserar sig p� bildade slavar, andra p� barbarfolk s�som kamorianerna och n�gra p� exotiska slavar s�som albinos, siamesiska tvillingar eller s�dana som har s�rskilda talanger.";
	bakgrundstabeller.jargiensbefolkning[77].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[78] = {};
	bakgrundstabeller.jargiensbefolkning[78].rubrik="Smugglare";
	bakgrundstabeller.jargiensbefolkning[78].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[78].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[78].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[78].beskrivning="Att frakta varor genom Kejsard�met eller till andra l�nder utan r�tt papper �r en om�jlighet och �ven om man har dessa s� f�rsvinner mycket av vinsten i tull, mutor och skatter. Smugglaren ser till att frakta varor utan att n�gon f�r reda p� det. En del leder mindre karavaner genom obygden, har dolda utrymmen i sina vagnar och de mest framg�ngsrika hela skepp fyllda med smuggelgods.";
	bakgrundstabeller.jargiensbefolkning[78].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[79] = {};
	bakgrundstabeller.jargiensbefolkning[79].rubrik="Soldat";
	bakgrundstabeller.jargiensbefolkning[79].bestamd="";
	bakgrundstabeller.jargiensbefolkning[79].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[79].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[79].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[79].beskrivning="Kejsard�mets ryggrad �r soldaterna i krigsregementena. Dessa m�n �r stationerade �ver hela riket, i kolonierna, och de bevakar gr�nser, provinser och handelsleder. Bland dem finns det ett starkt broderskap och en tilltro till sina bef�lhavare. Vissa �r fanatiskt lojala till Kejsaren och riket medan andra gladeligen skulle sluta upp vid karismatiska �verordnade om dessa skulle ha maktambitioner som skulle kr�va n�gon typ av revolt.";
	bakgrundstabeller.jargiensbefolkning[79].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Stridsf�rdigheter, 4 valfria enheter.";

	
	
	bakgrundstabeller.jargiensbefolkning[80] = {};
	bakgrundstabeller.jargiensbefolkning[80].rubrik="Spelare";
	bakgrundstabeller.jargiensbefolkning[80].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[80].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[80].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[80].beskrivning="T�rningar, kort och br�den. Enkla s�tt att tj�na snabba silvermynt om turen �r med en eller om man �r skicklig alternativt o�rlig nog att fuska. Spelare finns i alla delar av samh�llet och en del �r inget annat �n smutsiga trashankar som pants�tter sina skor i hoppet om att vinna en handfull mynt. Andra �r rika �dlingar som �ver dyra viner t�mmer familjens skattkistor, spelar bort tillg�ngar, slavar och skepp. F�r en spelare �r det f� saker som inte kan satsas p� ett dj�rvt t�rningskast.";
	bakgrundstabeller.jargiensbefolkning[80].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter R�relsef�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[81] = {};
	bakgrundstabeller.jargiensbefolkning[81].rubrik="Stadsvakt";
	bakgrundstabeller.jargiensbefolkning[81].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[81].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[81].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[81].beskrivning="Stadsportarna ska vaktas, handelsm�nnens varor ska s�kas igenom, fyllebr�k ska stoppas, det ska h�llas utkik efter eldsv�dor och brottslingar arresteras. Stadsvakten k�nner till varje gr�nd, varje bakgata, kommer ih�g ansiktena p� de vanliga handelsm�nnen och har alltid ett �ga p� dem som tycks sticka ut. En del tar allvarligt p� att h�lla ordning i staden, andra ser det som en god position att ta mutor och �r inte mycket mer �n brottslingar med befogenheter.";
	bakgrundstabeller.jargiensbefolkning[81].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Sociala f�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[82] = {};
	bakgrundstabeller.jargiensbefolkning[82].rubrik="Str�tr�vare";
	bakgrundstabeller.jargiensbefolkning[82].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[82].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[82].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[82].beskrivning="Med v�garna tungt trafikerade av resande m�nniskor �r det inte konstigt att vissa valt att tj�na sitt leverne p� att r�na och stj�la fr�n andra. Med utrustning och vapen i varierande kvalitet l�gger de sig i bakh�ll och anfaller n�r offren minst anar det. En del r�varband best�r bara av tv� till tre individer medan andra kan bli upp mot tjugo och trettio. Dessa kan till och med anfalla st�rre m�l s� som en kejserlig transport eller ett f�rn�mt rikemansf�lje med bev�pnad eskort.";
	bakgrundstabeller.jargiensbefolkning[82].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[83] = {};
	bakgrundstabeller.jargiensbefolkning[83].rubrik="Svindlare";
	bakgrundstabeller.jargiensbefolkning[83].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[83].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[83].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[83].beskrivning="Genom att v�lja sina ord r�tt och b�ja p� sanningen n�r helst situationen kr�ver det kan svindlaren g�ra sig stora vinster p� att s�lja v�rdel�st gods till godtrogna k�pare. Ofta m�ste en svindlare byta stad d� och d� n�r ryktet om hans eller hennes f�rs�ljningstaktik snart blir allm�n k�nnedom. D� g�ller det att kunna resa snabbt och sp�rl�st, f�r att sedan sl� upp verksamheten igen lite senare i en annan del av Kejsard�met.";
	bakgrundstabeller.jargiensbefolkning[83].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Sociala f�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[84] = {};
	bakgrundstabeller.jargiensbefolkning[84].rubrik="Tandsmed";
	bakgrundstabeller.jargiensbefolkning[84].valfriatabellslag=1;
	bakgrundstabeller.jargiensbefolkning[84].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[84].hantverkpoang=2;
	bakgrundstabeller.jargiensbefolkning[84].beskrivning="Soldater f�r sina t�nder utslagna, �dlingars garnityr drabbas av r�ta efter f�r mycket s�tsaker och kyrkans m�n gnisslar t�nder i s�mnen �ver all synd som beg�s. Tandsmeden �r den som ser �ver detta. De mest v�lb�rgade har mottagningar i de st�rsta st�derna, d�r ers�tter de f�rlorade t�nder med guld eller silver. De fattiga tandsmederna reser mellan byar och drar ut t�nder med grova t�nger.";
	bakgrundstabeller.jargiensbefolkning[84].beskrivninghak = "1 slag p� valfri tabell, 4 enheter R�relsef�rdigheter, 2 po�ng Hantverk."

	
	bakgrundstabeller.jargiensbefolkning[85] = {};
	bakgrundstabeller.jargiensbefolkning[85].rubrik="Tiggare";
	bakgrundstabeller.jargiensbefolkning[85].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[85].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[85].kanneteckenpoang=2;
	bakgrundstabeller.jargiensbefolkning[85].beskrivning="Med utstr�ckta h�nder str�cker sig smutsiga, utm�rglade och traskl�dda gestalter mot de som har pengar och ber om att f� n�gra silver s� de kan f� mat f�r dagen. Har de tur passerar f�rm�gna som delar ut allmosor, andra g�nger jagar stadsvakten bort dem med sparkar och slag. I vissa st�der f�r tiggarna s�rskilda tiggarbrickor som de syr fast p� sina kl�der eller har i ett band runt halsen f�r att visa att de har r�tten att be om allmosor.";
	bakgrundstabeller.jargiensbefolkning[85].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter R�relsef�rdigheter, 2 po�ng K�nnetecken."

	
	bakgrundstabeller.jargiensbefolkning[86] = {};
	bakgrundstabeller.jargiensbefolkning[86].rubrik="Tjuv";
	bakgrundstabeller.jargiensbefolkning[86].pluralobestamd="tjuvar";
	
	bakgrundstabeller.jargiensbefolkning[86].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[86].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[86].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[86].beskrivning="H�gt ovan hustaken och l�ngt nere i stadens m�rkaste vr�r �r det inte stadsvakten, pr�sterskapet, adeln eller k�pm�nnen som regerar. H�r lever tjuvarna p� att ta fr�n allt och alla som inte h�ller tillr�ckligt god uppsyn p� sina fickor och hus.";
	bakgrundstabeller.jargiensbefolkning[86].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter R�relsef�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[87] = {};
	bakgrundstabeller.jargiensbefolkning[87].rubrik="Torterare";
	bakgrundstabeller.jargiensbefolkning[87].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[87].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[87].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[87].beskrivning="Kejsard�met �r fyllt av hemligheter som m�ste avsl�jas och personer som m�ste straffas. Torterarens roll �r bryta s�nder ett m�nskligt psyke och tvinga fram erk�nnanden eller sarga offer till oigenk�nnlighet. I dunkla valv pressas gl�dgade t�nger mot bar hud, lemmar slits ur led och piskor sargar kroppar. Torterare �r vanligen anlitade av arm�n, stadsvakten, brottsorganisationer eller rika sl�kter. De som blir torterare �r vanligen kallhamrade eller s�dana som finner en stor njutning i sitt v�rv.";
	bakgrundstabeller.jargiensbefolkning[87].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 valfria enheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[88] = {};
	bakgrundstabeller.jargiensbefolkning[88].rubrik="Trof�j�gare";
	bakgrundstabeller.jargiensbefolkning[88].bestamd="trof�j�garen";
	bakgrundstabeller.jargiensbefolkning[88].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[88].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[88].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[88].beskrivning="I Kejsard�mets utkanter finns det gott om otillg�ngliga trakter. Djupa skogar, bergskedjor, tr�sk och gamla ruiner. I dessa omr�den kan man finna monstru�sa bestar av olika slag. Trof�j�garen har gjort en konst av att jaga och nedl�gga monstren. Trof�erna s�ljs sedan att pryda de vackra villorna i Kejsard�mets �vre skikt. Ibland f�ngas monstren in levande och s�ljs till gladiatorarenorna med god f�rtj�nst.";
	bakgrundstabeller.jargiensbefolkning[88].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[89] = {};
	bakgrundstabeller.jargiensbefolkning[89].rubrik="Upprorsmakare";
	bakgrundstabeller.jargiensbefolkning[89].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[89].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[89].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[89].beskrivning="Det finns de som ser hur korrupt och missk�tt Kejsard�met �r och hur or�ttvisor segrar dag efter dag. Vissa tar till vapen och v�ljer att k�mpa f�r att befria riket fr�n tyranniet. M�nga f�rs�ker f� provinserna sj�lvst�ndiga genom brandtal och attacker mot Kejsarens uts�nda. Dessa upprorsmakare �r st�ndigt jagade.";
	bakgrundstabeller.jargiensbefolkning[89].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Sociala f�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[90] = {};
	bakgrundstabeller.jargiensbefolkning[90].rubrik="Uppt�cksresande";
	bakgrundstabeller.jargiensbefolkning[90].pluralobestamd="uppt�cksresande";
	bakgrundstabeller.jargiensbefolkning[90].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[90].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[90].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[90].beskrivning="�ver �knar, genom djungler, under stormar och mitt bland fr�mmande kulturer reser de uppt�cktsresande f�r att vinna insikt i hur omv�rlden fungerar. Faror i form av l�mska sj�jungfrur, hemska vidunder, ofantliga cykloper och ondsinta barbarfolk g�r resan sv�r och i allra h�gsta grad d�dlig f�r de som v�gar sig ut utanf�r civilisationens gr�nser. Samtidigt lockar det ok�nda med dolda skatter, urgammal kunskap och inte minst �ra och ber�mmelse till de som �verlever.";
	bakgrundstabeller.jargiensbefolkning[90].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Kunskapsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[91] = {};
	bakgrundstabeller.jargiensbefolkning[91].rubrik="Utkastare";
	bakgrundstabeller.jargiensbefolkning[91].bestamd="utkastaren";
	bakgrundstabeller.jargiensbefolkning[91].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[91].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[91].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[91].beskrivning="N�r ett fyllebr�k urartar och ett v�nskapligt handgem�ng �verg�r till sparkar och kanske dragna vapen beh�vs det n�gon som kan s�ra p� de involverade och ge dem alla en kraftig spark mot d�rren. Detta �r utkastarens jobb. Om det inte vore f�r dessa individer skulle m�nga krogar snart vara i spillror.";
	bakgrundstabeller.jargiensbefolkning[91].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Stridsf�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[92] = {};
	bakgrundstabeller.jargiensbefolkning[92].rubrik="Utm�tare";
	bakgrundstabeller.jargiensbefolkning[92].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[92].kunskapsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[92].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[92].beskrivning="Ett t�rningskast, en misslyckad aff�r, eller otur kan driva en person i skuld. En utm�tare, vindicator p� jargiska, ombes�rjer d� utm�tning av egendomen specificerade till ett visst belopp. Utm�tare �r skickliga p� att hantera siffror, v�rdera tillg�ngar och se exakt vad som m�ste s�ljas f�r att f� fram pengarna. N�r dessa har utm�tningsordern i sin hand hj�lper inga b�ner eller urs�kter, de kommer ta ifr�n en det sista kl�desplagget om s� kr�vs. Utm�tare f�r provision p� det de tj�nar och det �r inte ovanligt att utm�tningsordrar som kan bringa in stora summor s�ljs f�r tusentals silver.";
	bakgrundstabeller.jargiensbefolkning[92].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[93] = {};
	bakgrundstabeller.jargiensbefolkning[93].rubrik="Utropare";
	bakgrundstabeller.jargiensbefolkning[93].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[93].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[93].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[93].beskrivning="I de v�ldiga st�derna m�ste nyheter f�rkunnas till folket. D� m�nga inte kan l�sa �r det utroparens roll att meddela inv�narna om makthavarnas beslut. P� torg och vid stadsportar proklamerar de om gudstj�nster, efterlysta brottslingar, arbeten som utlyses, nya lagar, vad som sker i staden, stundande offentliga avr�ttningar och nyheter fr�n resten av Kejsard�met. Det �r f� som har en s�dan insikt i stadens aff�rer som utroparna.";
	bakgrundstabeller.jargiensbefolkning[93].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.jargiensbefolkning[94] = {};
	bakgrundstabeller.jargiensbefolkning[94].rubrik="Vapenm�stare";
	bakgrundstabeller.jargiensbefolkning[94].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[94].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[94].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[94].beskrivning="Vapenm�starna ser strid som en konstform. De l�r sig invecklade och m�nga g�nger vackra s�tt att k�mpa och f�r m�nga handlar det mer om uppvisning �n om faktiskt kamp. En del vapenm�stare tj�nar som instrukt�rer, livvakter eller underh�llare i hoven. Andra vandrar mellan byarna och erbjuder sina tj�nster f�r en handfull mynt.";
	bakgrundstabeller.jargiensbefolkning[94].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter R�relsef�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[95] = {};
	bakgrundstabeller.jargiensbefolkning[95].rubrik="Veteran";
	bakgrundstabeller.jargiensbefolkning[95].striderdrabbningar=1;
	bakgrundstabeller.jargiensbefolkning[95].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[95].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[95].beskrivning="Krig sk�rdar sina offer och veteranen har dr�pt fler �n denne kan minnas och f�rlorat m�nga v�nner till vinande pilar och sv�rdshugg. V�ldsamheterna har satt sina sp�r och m�nga veteraner vrider sig i mardr�mmar, h�ller i sig vin f�r att gl�mma eller har �verg�tt till att bli obehagligt avtrubbade. �ven om de krigiska dagarna �r �ver f�r veteranen �r det ack s� l�tt att ta till vapen f�r att tj�na n�gra enkla silver d� den vanliga v�rlden f�r dem blivit fr�mmande och olustig.";
	bakgrundstabeller.jargiensbefolkning[95].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[96] = {};
	bakgrundstabeller.jargiensbefolkning[96].rubrik="Vink�nnare";
	bakgrundstabeller.jargiensbefolkning[96].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[96].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[96].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[96].beskrivning="Vink�nnarens roll �r att h�lla koll p� de juridiska dokument om vem som f�r j�sa vin, provsmaka partier som ska s�ljas och titta s� att det lagras p� korrekt s�tt. De som arbetar med detta �r oftast s� pass goda vink�nnare att de bara genom att dofta p� det kan ber�tta exakt fr�n vilken ving�rd vinet kommer, vilken druva som anv�nts och vilken �rg�ng det �r. S�ledes kan man se till att de rika f�r de finaste vinerna och att inga av ving�rdarna blir lurade och kopierade.";
	bakgrundstabeller.jargiensbefolkning[96].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[97] = {};
	bakgrundstabeller.jargiensbefolkning[97].rubrik="V�gvisare";
	bakgrundstabeller.jargiensbefolkning[97].bestamd="v�gvisaren";
	bakgrundstabeller.jargiensbefolkning[97].farderaventyr=1;
	bakgrundstabeller.jargiensbefolkning[97].rorelsefardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[97].vildmarksfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[97].beskrivning="I b�de stad och vildmark �r det viktigt att hitta r�tt. Handelsresande, pilgrimer och andra resande s�llskap anlitar d�rf�r en v�gvisare f�r att leda dem genom labyrinten av stigar, v�gar, broar, vadst�llen och korsningar. F�rutom den vanliga betalningen i form av silver brukar uppdragsgivaren �ven f� st� f�r mat och dryck f�r v�gvisaren under hela resan.";
	bakgrundstabeller.jargiensbefolkning[97].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter R�relsef�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.jargiensbefolkning[98] = {};
	bakgrundstabeller.jargiensbefolkning[98].rubrik="V�rdshusv�rd";
	bakgrundstabeller.jargiensbefolkning[98].bestamd="v�rdshusv�rden";
	bakgrundstabeller.jargiensbefolkning[98].pluralobestamd="v�rdshusv�rdar";
	bakgrundstabeller.jargiensbefolkning[98].valfriatabellslag=1;
	bakgrundstabeller.jargiensbefolkning[98].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[98].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[98].beskrivning="Mat serveras, rum st�das, golv sopas, stop diskas, resande kommer och resande l�mnar. En v�rdshusv�rd tr�ffar och pratar med m�nga olika typer av individer och blir snart en person som har koll p� vad som h�nder i staden och v�rlden. De mest nedg�ngna v�rdshusen �r inget mer �n r�kiga och pisstinkande gryt d�r �len �r utsp�dd och g�sterna fattiga. De mest luxu�sa v�rdshusen har en hel stab av tj�nare, otaliga rum, ett stort k�k, en fylld vink�llare och ett gott anseende.";
	bakgrundstabeller.jargiensbefolkning[98].beskrivninghak = "1 slag p� valfri tabell, 4 enheter Sociala f�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[99] = {};
	bakgrundstabeller.jargiensbefolkning[99].rubrik="Xinukultist";
	bakgrundstabeller.jargiensbefolkning[99].bestamd="xinukultisten";
	bakgrundstabeller.jargiensbefolkning[99].kunskapmysterier=1;
	bakgrundstabeller.jargiensbefolkning[99].stridsfardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[99].expertispoang=2;
	bakgrundstabeller.jargiensbefolkning[99].beskrivning="De pl�gade skrik som kommer fr�n Xinus anh�ngare �r ett offer till den m�rka guden. I sina privata tortyrkammare dyrkar de sm�rtans och det eviga lidandets prins, den m�rka och vansinnige Xinu. Under svarta m�ssor n�r dyrkarna extas genom att piska sig och sina anh�ngare till ljudet av psalmerna. F�, om ens n�gon av de invigda kommer n�gonsin kunna �terv�nda till den oskyldiga sinnesro som de en g�ng hade, sedan den sadistiska och f�rbjudna gudomen satt sina klor i deras sj�lar. De anser sig utvalda inf�r den kommande striden och tr�nar f�r att bli Xinus f�rk�mpar.";
	bakgrundstabeller.jargiensbefolkning[99].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Stridsf�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.jargiensbefolkning[100] = {};
	bakgrundstabeller.jargiensbefolkning[100].rubrik="�dling";
	bakgrundstabeller.jargiensbefolkning[100].bestamd="�dlingen";
	bakgrundstabeller.jargiensbefolkning[100].pluralobestamd="�dlingar"
	bakgrundstabeller.jargiensbefolkning[100].intrigerillgarningar=1;
	bakgrundstabeller.jargiensbefolkning[100].socialafardigheterenheter=4;
	bakgrundstabeller.jargiensbefolkning[100].valfriaenheter=4;
	bakgrundstabeller.jargiensbefolkning[100].beskrivning="I toppen av Kejsard�met, h�jd �ver den vanliga smutsiga massan, lever �dlingarna. N�gra spenderar sin tid likt f�ngar i ekande marmorpalats, andra deltar i dekadenta orgier d�r de glupskt slukar njutningar och f�rbjudna n�jen. De disciplinerade vakar �ver sin familjs f�rm�genhet och spinner den v�v av intriger som h�ller samman Kejsard�met och f�r de l�gre st�nden att dansa efter deras vilja.";
	bakgrundstabeller.jargiensbefolkning[100].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 4 valfria enheter.";
	
	bakgrundstabeller.vildmark = [];
	bakgrundstabeller.vildmark[0] = {};
	bakgrundstabeller.vildmark[0].subval = [[[]]];
	bakgrundstabeller.vildmark[0].vald = 0;
    bakgrundstabeller.vildmark[0].rubrik="Vildmark";
    bakgrundstabeller.vildmark[0].namn="vildmark";
    
	bakgrundstabeller.vildmark[1]= {};
	bakgrundstabeller.vildmark[1].rubrik="Andebesv�rjare";
	bakgrundstabeller.vildmark[1].bestamd="andebesv�rjaren";
	bakgrundstabeller.vildmark[1].obestamd="en andebesv�rjare";
	bakgrundstabeller.vildmark[1].kunskapmysterier=1;
	bakgrundstabeller.vildmark[1].mystikfardigheterenheter=4;
	bakgrundstabeller.vildmark[1].expertispoang=2;
	bakgrundstabeller.vildmark[1].beskrivning="M�nga stamsamh�llen karakt�riseras i stor utstr�ckning av v�rdnaden f�r naturens m�nga andar, och s�ledes ser man ett st�ndigt behov av att kunna h�lla sig v�l med dessa. Denna tro ers�tts ibland med, eller kompletteras av, en v�rdnad f�r �rorika och m�ktiga f�rfadersandar som �nnu vakar �ver sina efterlevande. Med detta i �tanke �r det inte m�rkligt att andebesv�rjaren, som ofta kallas schaman, har en viktig roll och kan f� stort inflytande.";
	bakgrundstabeller.vildmark[1].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Mystikf�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.vildmark[2] = {};
	bakgrundstabeller.vildmark[2].rubrik="Ber�ttare";
	bakgrundstabeller.vildmark[2].bestamd="ber�ttaren";
	bakgrundstabeller.vildmark[2].obestamd="en ber�ttare";
	bakgrundstabeller.vildmark[2].kunskapmysterier=1;
	bakgrundstabeller.vildmark[2].kunskapsfardigheterenheter=4;
	bakgrundstabeller.vildmark[2].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[2].beskrivning="�ven om det ofta faller p� pr�sternas eller andebesv�rjarnas lott, d�r s�dana finns, kan den som beh�rskar konsten att ber�tta om forna tider vara en mycket aktad individ. M�nga har detta som ett rent sidointresse, men ett litet f�tal �r s� skickliga och uppskattade att deras r�d och historief�rt�ljande g�r stammen villig att st� f�r deras f�rs�rjning.";
	bakgrundstabeller.vildmark[2].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.vildmark[3] = {};
	bakgrundstabeller.vildmark[3].rubrik="Boskapsdrivare";
	bakgrundstabeller.vildmark[3].bestamd="boskapsdrivaren";
	bakgrundstabeller.vildmark[3].obestamd="en boskapsdrivare";
	bakgrundstabeller.vildmark[3].farderaventyr=1;
	bakgrundstabeller.vildmark[3].stridsfardigheterenheter=4;
	bakgrundstabeller.vildmark[3].hantverkpoang=2;
	bakgrundstabeller.vildmark[3].beskrivning="Trots att de inte tillh�r de renodlade krigarnas skara �r m�nga boskapsdrivare h�rdat folk som ofta r�r sig en bit fr�n stammens boplatser. De m�ste vara kapabla att skydda de v�rdefulla kreaturen undan vilddjur och boskapstjuvar, �tminstone tills hj�lp kan anl�nda.";
	bakgrundstabeller.vildmark[3].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Stridsf�rdigheter, 2 po�ng Hantverk.";

	
	bakgrundstabeller.vildmark[4] = {};
	bakgrundstabeller.vildmark[4].rubrik="Ensling";
	bakgrundstabeller.vildmark[4].bestamd="enslingen";
	bakgrundstabeller.vildmark[4].obestamd="en ensling";
	bakgrundstabeller.vildmark[4].farderaventyr=1;
	bakgrundstabeller.vildmark[4].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[4].valfriaenheter=4;
	bakgrundstabeller.vildmark[4].beskrivning="I den ofta of�rl�tande vildmark d�r de flesta stamfolk lever anses det vara vanvett att f�rs�ka klara sig helt ensam. M�nga enslingar �r f�rskjutna fr�n sina stammar f�r att de beg�tt grova brott mot lag eller tabu, men det finns ocks� alltid de som av egen vilja drar sig undan fr�n gemenskapen. F� blir dock gamla med denna ensamma livsf�ring.";
	bakgrundstabeller.vildmark[4].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Vildmarksf�rdigheter, 4 Valfria enheter.";

	
	bakgrundstabeller.vildmark[5] = {};
	bakgrundstabeller.vildmark[5].rubrik="F�rhandlare";
	bakgrundstabeller.vildmark[5].bestamd="f�rhandlaren";
	bakgrundstabeller.vildmark[5].obestamd="en f�rhandlare";
	bakgrundstabeller.vildmark[5].farderaventyr=1;
	bakgrundstabeller.vildmark[5].kunskapsfardigheterenheter=4;
	bakgrundstabeller.vildmark[5].socialafardigheterenheter=4
	bakgrundstabeller.vildmark[5].beskrivning="Det �r inte alla stammar som har f�rhandlare, men n�r ett samh�lle v�xer sig tillr�ckligt stort brukar det ofta utkristalliseras grupper av individer som har talets g�va och �r kapabla att n� allm�nt godk�nda kompromisser. M�nga av dessa sl�r sig p� k�penskap, men andra fokuserar helt p� att vara h�vdingars uts�nda och folkets representanter vid st�rre m�ten, liksom p� att l�sa tvister innan de eskalerar till v�ldsamheter. Ofta tvingas f�rhandlare agera l�ngt fr�n stammens territorium, och deras resor kan rentav ta dem till fr�mmande folk.";
	bakgrundstabeller.vildmark[5].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.vildmark[6] = {};
	bakgrundstabeller.vildmark[6].rubrik="Handelsman";
	bakgrundstabeller.vildmark[6].bestamd="handelsmannen";
	bakgrundstabeller.vildmark[6].obestamd="en handelsman";
	bakgrundstabeller.vildmark[6].intrigerillgarningar=1;
	bakgrundstabeller.vildmark[6].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[6].kanneteckenpoang=2;
	bakgrundstabeller.vildmark[6].beskrivning="Handelns omfattning varierar mycket bland olika folk, men det finns s� gott som alltid m�jlighet f�r den som �r sl�ngd i k�ften att g�ra sig n�got m�tt av rikedom genom k�penskap. I m�nga samh�llen ser man dock ner p� dessa kr�mare och anser att de saknar f�rm�ga att livn�ra sig p� �rliga vis. Den allra mesta handeln sker, naturligtvis, genom byte av varor snarare �n i form av pengahantering.";
	bakgrundstabeller.vildmark[6].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 2 po�ng K�nnetecken."

	
	bakgrundstabeller.vildmark[7] = {};
	bakgrundstabeller.vildmark[7].rubrik="Hantverkare";
	bakgrundstabeller.vildmark[7].bestamd="hantverkaren";
	bakgrundstabeller.vildmark[7].obestamd="en hantverkare";
	bakgrundstabeller.vildmark[7].intrigerillgarningar=1;
	bakgrundstabeller.vildmark[7].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[7].hantverkpoang=2;
	bakgrundstabeller.vildmark[7].beskrivning="Vilka hantverk som ut�vas inom en stam beror p� s�v�l de krav milj�n st�ller som folkets teknologiska niv�, men i alla h�ndelser beh�vs det n�gra som �r skickliga p� att skapa och reparera f�rem�l. I m�nga fall �r det dessa ting som k�pslagare sedan kan anv�nda f�r att byta till sig fr�mmande varor till stammen.";
	bakgrundstabeller.vildmark[7].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 2 po�ng Hantverk."


	bakgrundstabeller.vildmark[8] = {};
	bakgrundstabeller.vildmark[8].rubrik="Helare";
	bakgrundstabeller.vildmark[8].bestamd="helaren";
	bakgrundstabeller.vildmark[8].obestamd="en helare";
	bakgrundstabeller.vildmark[8].kunskapmysterier=1;
	bakgrundstabeller.vildmark[8].kunskapsfardigheterenheter=4;
	bakgrundstabeller.vildmark[8].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[8].beskrivning="M�nga som lever i stamsamh�llen l�r sig av n�den att l�gga �tminstone klumpiga f�rband om de s�r de allt f�r ofta drabbas av, men vid allvarligare skador s�ker man upp en helare. Det �r inte alltid helaren �r stammens mest respekterade person, men hen �r viktig f�r folkets �verlevnad.";
	bakgrundstabeller.vildmark[8].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.vildmark[9] = {};
	bakgrundstabeller.vildmark[9].rubrik="Jordbrukare";
	bakgrundstabeller.vildmark[9].bestamd="jordbrukaren";
	bakgrundstabeller.vildmark[9].obestamd="en jordbrukare";
	bakgrundstabeller.vildmark[9].pluralobestamd="jordbrukare";
	bakgrundstabeller.vildmark[9].farderaventyr=1;
	bakgrundstabeller.vildmark[9].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[9].hantverkpoang=2;
	bakgrundstabeller.vildmark[9].beskrivning="De flesta stamlevande folk �gnar sig i �tminstone n�gon m�n �t jordbruk, eller �tminstone �t att veta var de mest n�rande v�xterna finns. I v�ldigt isolerade kulturer betraktas f�rm�gan att veta n�r man ska s� och hur man b�st sk�rdar jordens frukter som n�rmast magisk och de som beh�rskar den som personer i god kontakt med naturens andar.";
	bakgrundstabeller.vildmark[9].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Vildmarksf�rdigheter, 2 po�ng Hantverk.";

	
	bakgrundstabeller.vildmark[10] = {};
	bakgrundstabeller.vildmark[10].rubrik="Jordemoder";
	bakgrundstabeller.vildmark[10].bestamd="jordemodern";
	bakgrundstabeller.vildmark[10].obestamd="en jordemoder";
	bakgrundstabeller.vildmark[10].valfriatabellslag=1;
	bakgrundstabeller.vildmark[10].kunskapsfardigheterenheter=4;
	bakgrundstabeller.vildmark[10].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[10].beskrivning="�ven om det inte betraktas som den mest �rorika sysslan i ofta krigiska kulturer �r de som kan konsten att p� b�sta s�tt bist� vid f�rlossningar mycket uppskattade. Deras hj�lp kan ofta vara helt avg�rande f�r moderns och barnets �verlevnad, och m�nga knyter starka band till de barn de hj�lper till v�rlden.";
	bakgrundstabeller.vildmark[10].beskrivninghak = "1 slag p� valfri tabell, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.vildmark[11] = {};
	bakgrundstabeller.vildmark[11].rubrik="J�gare";
	bakgrundstabeller.vildmark[11].bestamd="j�garen";
	bakgrundstabeller.vildmark[11].obestamd="en j�gare";
	bakgrundstabeller.vildmark[11].farderaventyr=1;
	bakgrundstabeller.vildmark[11].rorelsefardigheterenheter=4;
	bakgrundstabeller.vildmark[11].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[11].beskrivning="J�gare kan arbeta med mycket olika metoder beroende p� var de lever, om de jagar i grupp, och i synnerhet p� vad deras byte �r. Detta �r en mycket vanlig syssels�ttning inom de flesta stamsamh�llen.";
	bakgrundstabeller.vildmark[11].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter R�relsef�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.vildmark[12] = {};
	bakgrundstabeller.vildmark[12].rubrik="Ledare";
	bakgrundstabeller.vildmark[12].bestamd="ledaren";
	bakgrundstabeller.vildmark[12].obestamd="en ledare";
	bakgrundstabeller.vildmark[12].intrigerillgarningar=1;
	bakgrundstabeller.vildmark[12].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[12].stridsfardigheterenheter=4;
	bakgrundstabeller.vildmark[12].beskrivning="I m�nga stamsamh�llen �r inte ledarpositionen n�got man �rver fr�n v�rdade f�rf�der, utan n�gonting individen m�ste k�mpa sig till och visa sig duglig f�r. �ven om skickliga ledare i allm�nhet l�r sig att spela ut motst�ndare mot varandra f�r att inte st�ndigt beh�va f�rsvara sin position med blod �r krigaridealet p�tagligt hos de flesta ledare.";
	bakgrundstabeller.vildmark[12].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 4 enheter Stridsf�rdigheter."

	
	bakgrundstabeller.vildmark[13] = {};
	bakgrundstabeller.vildmark[13].rubrik="Ofri";
	bakgrundstabeller.vildmark[13].bestamd="den ofria";
	bakgrundstabeller.vildmark[13].obestamd="en ofri";
	bakgrundstabeller.vildmark[13].valfriatabellslag=1;
	bakgrundstabeller.vildmark[13].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[13].hantverkpoang=2;
	bakgrundstabeller.vildmark[13].beskrivning="En ofri man eller kvinna �r ofta slav eller tr�l, d�r s�dana f�rekommer, men kan �ven ha tagits som krigsf�nge. Ett f�tal har ocks� f�rlorat sin frihet som straff f�r n�gon f�rbrytelse, �ven om det s�llan �r en vanlig form av bestraffning. Ofta har de ofria h�rda arbetsuppgifter som inte tar dem f�r l�ngt fr�n folkets vakande �gon.";
	bakgrundstabeller.vildmark[13].beskrivninghak = "1 slag p� valfri tabell, 4 enheter Vildmarksf�rdigheter, 2 po�ng Hantverk.";

	
	bakgrundstabeller.vildmark[14] = {};
	bakgrundstabeller.vildmark[14].rubrik="Og�rningsman";
	bakgrundstabeller.vildmark[14].bestamd="og�rningsmannen";
	bakgrundstabeller.vildmark[14].obestamd="en og�rningsman";
	bakgrundstabeller.vildmark[14].farderaventyr=1;
	bakgrundstabeller.vildmark[14].rorelsefardigheterenheter=4;
	bakgrundstabeller.vildmark[14].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[14].beskrivning="Att f�rs�rja sig p� st�lder fr�n stammen �r ofta ett s�kert s�tt att bli f�rvisad eller dr�pt, och s�ledes g�r den som t�nker sig ett ohederligt leverne b�st i att vara mycket f�rslagen. Den som med stor skicklighet stj�l boskap eller andra dyrbarheter fr�n fr�mmande folk och fientliga stammar m�ter dock s�llan n�gon fientlighet bland de sina, och kan rentav bli mycket uppskattad under vissa omst�ndigheter.";
	bakgrundstabeller.vildmark[14].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter R�relsef�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.vildmark[15] = {};
	bakgrundstabeller.vildmark[15].rubrik="Pr�st";
	bakgrundstabeller.vildmark[15].bestamd="pr�sten";
	bakgrundstabeller.vildmark[15].obestamd="en pr�st";
	bakgrundstabeller.vildmark[15].kunskapmysterier=1;
	bakgrundstabeller.vildmark[15].kunskapsfardigheterenheter=4;
	bakgrundstabeller.vildmark[15].mystikfardigheterenheter=4;
	bakgrundstabeller.vildmark[15].beskrivning="Bland vissa stamfolk f�rekommer tron p� en eller flera namngivna gudar ist�llet f�r dyrkan av besj�lad natur eller f�rfadersandar. F�rdomsfulla jargiska l�rde betraktar ofta denna typ av religion som en mer civiliserad och utvecklad form av avgudadyrkan. I vissa, inte s�llan splittrade, grupper verkar s�v�l andebesv�rjare som pr�ster.";
	bakgrundstabeller.vildmark[15].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 4 enheter Mystikf�rdigheter.";

	
	bakgrundstabeller.vildmark[16] = {};
	bakgrundstabeller.vildmark[16].rubrik="Samlare";
	bakgrundstabeller.vildmark[16].bestamd="samlaren";
	bakgrundstabeller.vildmark[16].obestamd="en samlare";
	bakgrundstabeller.vildmark[16].farderaventyr=1;
	bakgrundstabeller.vildmark[16].kunskapsfardigheterenheter=2;
	bakgrundstabeller.vildmark[16].vildmarksfardigheterenheter=2;
	bakgrundstabeller.vildmark[16].hantverkpoang=2;
	bakgrundstabeller.vildmark[16].beskrivning="Som samlare r�knas de som �r vana att hitta s�v�l matnyttiga v�xter som �rter som kan anv�ndas f�r f�rgningsarbeten och olika dekokter. I vissa fall har de roller som �verlappar helarens, men m�nga beh�rskar ocks� konsten att brygga d�dliga gifter.";
	bakgrundstabeller.vildmark[16].beskrivninghak = "1 slag p� F�rder \& �ventyr, 2 enheter Kunskapsf�rdigheter, 2 enheter Vildmarksf�rdigheter, 2 po�ng Hantverk.";

	
	bakgrundstabeller.vildmark[17] = {};
	bakgrundstabeller.vildmark[17].rubrik="Sj�farare";
	bakgrundstabeller.vildmark[17].bestamd="sj�fararen";
	bakgrundstabeller.vildmark[17].obestamd="en sj�farare";
	bakgrundstabeller.vildmark[17].farderaventyr=1;
	bakgrundstabeller.vildmark[17].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[17].kanneteckenpoang=2;
	bakgrundstabeller.vildmark[17].beskrivning="Beroende p� var stammen lever kan sj�farare, ut�ver att vara helt obefintliga, syssels�tta sig som str�vsamma fiskare eller l�ngv�ga resande. Gemensamt �r att deras liv �r h�rda och att de �r p�tagligt utl�mnade �t v�drets makter, ofta i b�tar som kan l�mna en hel del att �nska. De flesta sj�farare k�nner till hundratals ramsor och ritualer f�r att vinna god vind och fina f�ngster, och ofta �r de lite kantiga och passar inte riktigt in bland de som inte delar deras band till vattnet.";
	bakgrundstabeller.vildmark[17].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Vildmarksf�rdigheter, 2 po�ng K�nnetecken.";

	
	bakgrundstabeller.vildmark[18] = {};
	bakgrundstabeller.vildmark[18].rubrik="Skuggm�rkt";
	bakgrundstabeller.vildmark[18].bestamd="den skuggm�rkta";
	bakgrundstabeller.vildmark[18].obestamd="en skuggm�rkt";
	bakgrundstabeller.vildmark[18].farderaventyr=1;
	bakgrundstabeller.vildmark[18].valfriaenheter=4;
	bakgrundstabeller.vildmark[18].expertispoang=2;
	bakgrundstabeller.vildmark[18].beskrivning="Detta �r inte direkt ett s�tt att f�rs�rja sig eller ett yrke inom stammen, utan snarare en roll som man ofta talar tyst om. De flesta folk som lever n�ra den ot�mjda naturen har likv�l erfarenheter av och legender om det fr�mmande och farliga Skugglandet, och kunskapen om hur man hanterar dess inverkan kan vara livsavg�rande f�r en hel bos�ttning. Man talar tyst om det f�tal som k�nner skuggfolkens seder - ofta vet alla vilka det �r, utan att egentligen yttra det annat �n i n�dfall. Inte s�llan tros dessa speciella individer vara halvblod av n�got slag, eller kunna vandra in i Skugglandet efter egen vilja.";
	bakgrundstabeller.vildmark[18].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 Valfria enheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.vildmark[19] = {};
	bakgrundstabeller.vildmark[19].rubrik="Stamkrigare";
	bakgrundstabeller.vildmark[19].bestamd="stamkrigaren";
	bakgrundstabeller.vildmark[19].obestamd="en stamkrigare";
	bakgrundstabeller.vildmark[19].striderdrabbningar=1;
	bakgrundstabeller.vildmark[19].stridsfardigheterenheter=4;
	bakgrundstabeller.vildmark[19].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[19].beskrivning="�ven om livet i stammen ofta kr�ver att alla kan f�rsvara sig hj�lpligt �r det vanligt att det finns en skara dedikerade krigare, p� vilkas lott det faller att skydda befolkningen och k�mpa i stammens namn. I fredligare tider bist�r de emellan�t j�garna, men stamkrigare �r mycket p�tagligt tr�nade f�r att besegra och d�da m�nniskor snarare �n djur.";
	bakgrundstabeller.vildmark[19].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.vildmark[20] = {};
	bakgrundstabeller.vildmark[20].rubrik="Stigfinnare";
	bakgrundstabeller.vildmark[20].bestamd="stigfinnaren";
	bakgrundstabeller.vildmark[20].obestamd="en stigfinnare";
	bakgrundstabeller.vildmark[20].farderaventyr=1;
	bakgrundstabeller.vildmark[20].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[20].kanneteckenpoang=2;
	bakgrundstabeller.vildmark[20].beskrivning="Stigfinnarnas v�rv �verlappar ofta med j�garnas, men stigfinnarna �r mer inriktade p� att uppt�cka st�ndigt nya resurser och smidigare f�rdesv�gar p� det omr�de som stammen h�ller som sitt. De �r ofta n�got av excentriska ensamvargar och kan emellan�t vara ifr�n bos�ttningen l�ngre tider, utan att p� n�got s�tt �verge den.";
	bakgrundstabeller.vildmark[20].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Vildmarksf�rdigheter, 2 po�ng K�nnetecken.";

	
	bakgrundstabeller.vildmark[21] = {};
	bakgrundstabeller.vildmark[21].rubrik="Teckentydare";
	bakgrundstabeller.vildmark[21].bestamd="teckentydaren";
	bakgrundstabeller.vildmark[21].obestamd="en teckentydare";
	bakgrundstabeller.vildmark[21].kunskapmysterier=1;
	bakgrundstabeller.vildmark[21].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[21].expertispoang=2;
	bakgrundstabeller.vildmark[21].beskrivning="Med teckentydare avses inte i f�rsta hand sp�rare, �ven om de ofta kan bli mycket skickliga s�dana, utan personer som p� n�got s�tt ser mer �n andra. Ofta handlar det om att de tros kunna f�rutsp� framtiden i naturens m�nster, men vissa av dem s�ger sig �ven kunna se g�ngna tider och platser, eller rentav kommunicera med de d�das andar. De har s�llan andebesv�rjares specifika utbildning f�r sitt v�rv och befinner sig emellan�t rentav p� kollisionskurs med dessa. M�nga s�ker dock upp teckentydarna f�r att f� veta vad framtiden b�r i sitt sk�te.";
	bakgrundstabeller.vildmark[21].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Vildmarksf�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.vildmark[22] = {};
	bakgrundstabeller.vildmark[22].rubrik="T�mjare";
	bakgrundstabeller.vildmark[22].bestamd="t�mjaren";
	bakgrundstabeller.vildmark[22].obestamd="en t�mjare";
	bakgrundstabeller.vildmark[22].farderaventyr=1;
	bakgrundstabeller.vildmark[22].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[22].vildmarksfardigheterenheter=4;
	bakgrundstabeller.vildmark[22].beskrivning="M�nga stamfolk har kommit att h�lla sig med n�gon form av tr�nade djur, som exempelvis hundar eller olika riddjur. Att l�ra upp dessa �r s�llan en persons enda syssla, men det kan vara en kr�vande konst som kr�ver t�lamod, slughet och en stark vilja.";
	bakgrundstabeller.vildmark[22].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Sociala f�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.vildmark[23] = {};
	bakgrundstabeller.vildmark[23].rubrik="Underh�llare";
	bakgrundstabeller.vildmark[23].bestamd="underh�llaren";
	bakgrundstabeller.vildmark[23].obestamd="en underh�llare";
	bakgrundstabeller.vildmark[23].farderaventyr=1;
	bakgrundstabeller.vildmark[23].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[23].kanneteckenpoang=2;
	bakgrundstabeller.vildmark[23].beskrivning="De flesta i stamsamh�llen kan inte livn�ra sig enbart p� att vara underh�llande, men ibland dyker det upp personer som brinner s� f�r s�ng, musik och liknande n�jen att de ser det som sin huvudsakliga uppgift i livet. S� l�nge dessa individer �ven g�r sitt f�r att dra in mat till samh�llet betraktas de med allt fr�n stor uppskattning till roat �verseende. M�nga �r ocks� oroliga sj�lar som vandrar runt mellan bos�ttningar och kan agera s�ndebud d�r specialiserade s�dana saknas.";
	bakgrundstabeller.vildmark[23].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Sociala f�rdigheter, 2 po�ng K�nnetecken."

	
	bakgrundstabeller.vildmark[24] = {};
	bakgrundstabeller.vildmark[24].rubrik="V�ktare";
	bakgrundstabeller.vildmark[24].bestamd="v�ktaren";
	bakgrundstabeller.vildmark[24].obestamd="en v�ktare";
	bakgrundstabeller.vildmark[24].striderdrabbningar=1;
	bakgrundstabeller.vildmark[24].stridsfardigheterenheter=4;
	bakgrundstabeller.vildmark[24].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[24].beskrivning="Denna sorts specialiserade krigare f�rekommer inte i alla kulturer, men d�r de finns �r de stolta �ver sitt v�rv och hyllade f�r det. Deras roll �r att beskydda platser och, framf�r allt, individer av s�rskild vikt, vilket skiljer dem fr�n de typiska k�mparna som ofta har bredare syssels�ttningar. Kloka ledare omger sig g�rna med en eller flera dugliga v�ktare, liksom mystiker och s�ndebud av olika slag.";
	bakgrundstabeller.vildmark[24].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Sociala f�rdigheter 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.vildmark[25] = {};
	bakgrundstabeller.vildmark[25].rubrik="�lskare";
	bakgrundstabeller.vildmark[25].bestamd="�lskaren";
	bakgrundstabeller.vildmark[25].obestamd="en �lskare";
	bakgrundstabeller.vildmark[25].intrigerillgarningar=1;
	bakgrundstabeller.vildmark[25].socialafardigheterenheter=4;
	bakgrundstabeller.vildmark[25].kanneteckenpoang=2;
	bakgrundstabeller.vildmark[25].beskrivning="I alla kulturer finns det de som av n�d eller val vinner f�rs�rjning genom sin f�rm�ga att sk�nka k�ttsliga njutningar. Deras position p� samh�llsstegen kan variera enormt, till den grad att de kan betraktas som samh�llets l�gsta hos vissa folk och tillh�ra den absoluta eliten bland andra. Det �r ocks� mycket olika huruvida de har f�st sig vid en specifik person eller f�rv�ntas betj�na vem som �n kan erbjuda tillr�ckligt f�r deras tj�nster.";
	bakgrundstabeller.vildmark[25].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 2 po�ng K�nnetecken.";
	
	bakgrundstabeller.nermadasbefolkning = [];
	bakgrundstabeller.nermadasbefolkning[0] = {};
	bakgrundstabeller.nermadasbefolkning[0].subval = [[[]]];
	bakgrundstabeller.nermadasbefolkning[0].vald = 0;
    bakgrundstabeller.nermadasbefolkning[0].rubrik="Nermadas befolkning";
    bakgrundstabeller.nermadasbefolkning[0].namn="nermadasbefolkning";
    
	bakgrundstabeller.nermadasbefolkning[1]= {};
	bakgrundstabeller.nermadasbefolkning[1].rubrik="Arkitekt";
	bakgrundstabeller.nermadasbefolkning[1].bestamd="arkitekten";
	bakgrundstabeller.nermadasbefolkning[1].obestamd="en arkitekt";
	bakgrundstabeller.nermadasbefolkning[1].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[1].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[1].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[1].beskrivning="Konsten att planera s�v�l hus som broar och andra byggen �r s�v�l viktig som uppskattad, och dess ut�vare �r ofta v�lbetalda. P� detta omr�de anses nermadierna tillh�ra Mundanas allra fr�msta.";
	//bakgrundstabeller.nermadasbefolkning[1].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Kunskapsf�rdigheter, 2 po�ng Hantverk.";

	
	bakgrundstabeller.nermadasbefolkning[2] = {};
	bakgrundstabeller.nermadasbefolkning[2].rubrik="Bard";
	bakgrundstabeller.nermadasbefolkning[2].bestamd="barden";
	bakgrundstabeller.nermadasbefolkning[2].obestamd="en bard";
	bakgrundstabeller.nermadasbefolkning[2].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[2].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[2].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[2].beskrivning="Den som kan underh�lla med musik och medryckande ber�ttelser blir v�l mottagen vart han �n vandrar.";
	//bakgrundstabeller.nermadasbefolkning[2].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter R�relsef�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[3] = {};
	bakgrundstabeller.nermadasbefolkning[3].rubrik="Baron";
	bakgrundstabeller.nermadasbefolkning[3].bestamd="baronen";
	bakgrundstabeller.nermadasbefolkning[3].obestamd="en baron";
	bakgrundstabeller.nermadasbefolkning[3].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[3].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[3].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[3].beskrivning="Baroner och baronessor �r inflytelserika l�nsherrar som styr ett l�n i utbyte mot en trohetsed till en av de sju grevarna och glatt intrigerar sinsemellan f�r att �ka sin makt.";
	//bakgrundstabeller.nermadasbefolkning[3].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[4] = {};
	bakgrundstabeller.nermadasbefolkning[4].rubrik="B�del";
	bakgrundstabeller.nermadasbefolkning[4].bestamd="b�deln";
	bakgrundstabeller.nermadasbefolkning[4].obestamd="en b�del";
	bakgrundstabeller.nermadasbefolkning[4].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[4].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[4].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[4].beskrivning="�ven i ett samh�lle som det nermadiska, d�r b�deln inte befinner sig p� botten av samh�llet, r�r det sig om en fruktad och mytomspunnen person.";
	//bakgrundstabeller.nermadasbefolkning[4].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Stridsf�rdigheter, 2 po�ng Hantverk.";

	
	bakgrundstabeller.nermadasbefolkning[5] = {};
	bakgrundstabeller.nermadasbefolkning[5].rubrik="Brottsling";
	bakgrundstabeller.nermadasbefolkning[5].bestamd="brottslingen";
	bakgrundstabeller.nermadasbefolkning[5].obestamd="en brottsling";
	bakgrundstabeller.nermadasbefolkning[5].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[5].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[5].stridsfardigheterenheter=4
	bakgrundstabeller.nermadasbefolkning[5].beskrivning="S�v�l i st�derna som p� landsbygden finns det folk som anv�nder sig av allehanda ohederliga och inte s�llan v�ldsamma metoder f�r att f�rs�ka bli rika eller bara �verleva till n�sta dag.";
	//bakgrundstabeller.nermadasbefolkning[5].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter R�relsef�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[6] = {};
	bakgrundstabeller.nermadasbefolkning[6].rubrik="Dansm�stare";
	bakgrundstabeller.nermadasbefolkning[6].bestamd="dansm�staren";
	bakgrundstabeller.nermadasbefolkning[6].obestamd="en dansm�stare";
	bakgrundstabeller.nermadasbefolkning[6].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[6].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[6].kanneteckenpoang=2;
	bakgrundstabeller.nermadasbefolkning[6].beskrivning="Ur�ldriga traditioner fr�n det coloniska imperiet f�rvaltas av de skickligaste underh�llare, som framf�r fantastiska ber�ttelser med sina akrobatiska danser.";
	//bakgrundstabeller.nermadasbefolkning[6].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter R�relsef�rdigheter, 2 po�ng K�nnetecken."

	
	bakgrundstabeller.nermadasbefolkning[7] = {};
	bakgrundstabeller.nermadasbefolkning[7].rubrik="Diplomat";
	bakgrundstabeller.nermadasbefolkning[7].bestamd="diplomaten";
	bakgrundstabeller.nermadasbefolkning[7].obestamd="en diplomat";
	bakgrundstabeller.nermadasbefolkning[7].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[7].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[7].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[7].beskrivning="Vare sig de tj�nar vid furstehov inom landet eller som Nermadas ambassad�rer i fj�rran l�nder �r diplomaterna aktade f�r sina insatser och fruktade f�r sina lena tungor och slipade intellekt. ";
	//bakgrundstabeller.nermadasbefolkning[7].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter."


	bakgrundstabeller.nermadasbefolkning[8] = {};
	bakgrundstabeller.nermadasbefolkning[8].rubrik="D�dgr�vare";
	bakgrundstabeller.nermadasbefolkning[8].bestamd="d�dgr�varen";
	bakgrundstabeller.nermadasbefolkning[8].obestamd="en d�dgr�vare";
	bakgrundstabeller.nermadasbefolkning[8].kunskapmysterier=1;
	bakgrundstabeller.nermadasbefolkning[8].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[8].expertispoang=2;
	bakgrundstabeller.nermadasbefolkning[8].beskrivning="D�den tar alla, och alla m�ste tas om hand n�r livet �r slut. Att gr�va gravar och hantera de d�da anses ofta vara en av samh�llets l�gsta sysslor, men deras t�ta kontakter med pr�sterskapet g�r m�nga d�dgr�vare f�rv�nansv�rt kunniga p� allehanda omr�den.";
	//bakgrundstabeller.nermadasbefolkning[8].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter R�relsef�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.nermadasbefolkning[9] = {};
	bakgrundstabeller.nermadasbefolkning[9].rubrik="Fiskare";
	bakgrundstabeller.nermadasbefolkning[9].bestamd="fiskaren";
	bakgrundstabeller.nermadasbefolkning[9].obestamd="en fiskare";
	bakgrundstabeller.nermadasbefolkning[9].pluralobestamd="fiskare";
	bakgrundstabeller.nermadasbefolkning[9].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[9].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[9].expertispoang=2;
	bakgrundstabeller.nermadasbefolkning[9].beskrivning="Havet sk�nker nermadierna en stor del av deras f�da, och det anses vara ett rej�lt och hederligt arbete att med envishet och skicklighet sk�rda dess frukter.";
	//bakgrundstabeller.nermadasbefolkning[9].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Vildmarksf�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.nermadasbefolkning[10] = {};
	bakgrundstabeller.nermadasbefolkning[10].rubrik="L�rd";
	bakgrundstabeller.nermadasbefolkning[10].bestamd="den l�rde";
	bakgrundstabeller.nermadasbefolkning[10].obestamd="en l�rd";
	bakgrundstabeller.nermadasbefolkning[10].kunskapmysterier=1;
	bakgrundstabeller.nermadasbefolkning[10].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[10].expertispoang=2;
	bakgrundstabeller.nermadasbefolkning[10].beskrivning="De l�rda fyller m�ngahanda roller i samh�llet, och deras kunskaper kan vara av de mest skiftande slag. F�r m�nga �r en tj�nst d�r man undervisar och r�dger vid hoven den mest �nskade sysslan, men l�rda arbetar ocks� inom handelsbolag eller p� l�gre poster inom administrationen.";
	//bakgrundstabeller.nermadasbefolkning[10].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.nermadasbefolkning[11] = {};
	bakgrundstabeller.nermadasbefolkning[11].rubrik="F�ltsk�r";
	bakgrundstabeller.nermadasbefolkning[11].bestamd="f�ltsk�ren";
	bakgrundstabeller.nermadasbefolkning[11].obestamd="en f�ltsk�r";
	bakgrundstabeller.nermadasbefolkning[11].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[11].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[11].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[11].beskrivning="De dj�rvaste av l�kekunniga s�ker sig till tj�nster n�ra de strider d�r folk sargas av fienders vapen och bestars klor. Andra har helt enkelt oturen att kommenderas till tj�nst p� dessa utsatta platser, och g�r vad de kan f�r att �verleva och h�lla andra vid liv.";
	bakgrundstabeller.nermadasbefolkning[11].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Kunskapsf�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[12] = {};
	bakgrundstabeller.nermadasbefolkning[12].rubrik="F�rfalskare";
	bakgrundstabeller.nermadasbefolkning[12].bestamd="f�rfalskaren";
	bakgrundstabeller.nermadasbefolkning[12].obestamd="en f�rfalskare";
	bakgrundstabeller.nermadasbefolkning[12].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[12].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[12].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[12].beskrivning="Varje sigill och vapensk�ld som skapas och varje dokument som undertecknas �r en m�jlighet f�r f�rfalskaren och hans ibland h�gt uppsatta uppdragsgivare.";
	bakgrundstabeller.nermadasbefolkning[12].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Kunskapsf�rdigheter, 2 po�ng Hantverk."

	
	bakgrundstabeller.nermadasbefolkning[13] = {};
	bakgrundstabeller.nermadasbefolkning[13].rubrik="Gardessoldat";
	bakgrundstabeller.nermadasbefolkning[13].bestamd="gardessoldaten";
	bakgrundstabeller.nermadasbefolkning[13].obestamd="en gardessoldat";
	bakgrundstabeller.nermadasbefolkning[13].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[13].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[13].valfriaenheter=4;
	bakgrundstabeller.nermadasbefolkning[13].beskrivning="Varje �dling av betydelse m�ste ha skickliga stridsm�n till hands som kan skydda s�v�l �gor som person. Dessa gardessoldater handplockas ofta bland de skickligaste krigare, och kan ha mycket olika tr�ning och specialkompetens.";
	bakgrundstabeller.nermadasbefolkning[13].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Stridsf�rdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.nermadasbefolkning[14] = {};
	bakgrundstabeller.nermadasbefolkning[14].rubrik="Gatuf�rs�ljare";
	bakgrundstabeller.nermadasbefolkning[14].bestamd="gatuf�rs�ljaren";
	bakgrundstabeller.nermadasbefolkning[14].obestamd="en gatuf�rs�ljare";
	bakgrundstabeller.nermadasbefolkning[14].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[14].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[14].expertispoang=2;
	bakgrundstabeller.nermadasbefolkning[14].beskrivning="Mer framst�endek�pm�n markerar ofta sitt avst�nd mot de m�nglare som m�ste skrika ut sina varors f�rtr�fflighet p� gator och torg, men handlarna ser och h�r mycket som inte n�r in i de slutna salongerna.";
	bakgrundstabeller.nermadasbefolkning[14].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.nermadasbefolkning[15] = {};
	bakgrundstabeller.nermadasbefolkning[15].rubrik="Grovarbetare";
	bakgrundstabeller.nermadasbefolkning[15].bestamd="grovarbetaren";
	bakgrundstabeller.nermadasbefolkning[15].obestamd="en grovarbetare";
	bakgrundstabeller.nermadasbefolkning[15].valfriatabellslag=1;
	bakgrundstabeller.nermadasbefolkning[15].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[15].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[15].beskrivning="Det finns alltid h�rda arbeten som beh�ver g�ras, och m�nga fattiga som sliter ut sina kroppar f�r att utf�ra dem.";
	bakgrundstabeller.nermadasbefolkning[15].beskrivninghak = "1 slag p� valfri tabell, 4 enheter Vildmarksf�rdigheter, 2 po�ng Hantverk.";

	
	bakgrundstabeller.nermadasbefolkning[16] = {};
	bakgrundstabeller.nermadasbefolkning[16].rubrik="Gycklare";
	bakgrundstabeller.nermadasbefolkning[16].bestamd="gycklaren";
	bakgrundstabeller.nermadasbefolkning[16].obestamd="en gycklare";
	bakgrundstabeller.nermadasbefolkning[16].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[16].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[16].kanneteckenpoang=2;
	bakgrundstabeller.nermadasbefolkning[16].beskrivning="Gyckelkonster och deras ut�vare �r l�ngt ifr�n lika aktade som att f�ngsla en publik med musik och sagor, men m�nga har inget val och andra anser att ett liv i n�gon sorts frihet �r v�rt rotl�sheten och de sneda blickarna.";
	bakgrundstabeller.nermadasbefolkning[16].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter R�relsef�rdigheter, 2 po�ng K�nnetecken.";

	
	bakgrundstabeller.nermadasbefolkning[17] = {};
	bakgrundstabeller.nermadasbefolkning[17].rubrik="Hamnsj�are";
	bakgrundstabeller.nermadasbefolkning[17].bestamd="hamnsj�aren";
	bakgrundstabeller.nermadasbefolkning[17].obestamd="en hamnsj�are";
	bakgrundstabeller.nermadasbefolkning[17].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[17].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[17].expertispoang=2;
	bakgrundstabeller.nermadasbefolkning[17].beskrivning="Om �n betraktade som r�skinn som man g�r b�st i att inte st�ta sig med fyller hamnsj�arna en mycket viktig funktion genom att lassa och lossa varor i Nermadas hamnar.";
	bakgrundstabeller.nermadasbefolkning[17].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Stridsf�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.nermadasbefolkning[18] = {};
	bakgrundstabeller.nermadasbefolkning[18].rubrik="Hantverkare";
	bakgrundstabeller.nermadasbefolkning[18].bestamd="hantverkaren";
	bakgrundstabeller.nermadasbefolkning[18].obestamd="en hantverkare";
	bakgrundstabeller.nermadasbefolkning[18].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[18].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[18].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[18].beskrivning="Det finns alltid saker som beh�ver lagas eller skapas fr�n grunden, och hantverkare l�ter sig sv�rligen klumpas ihop till en grupp. Allt fr�n krukmakare till snickare och vapensmeder ryms i denna bakgrund.";
	bakgrundstabeller.nermadasbefolkning[18].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter R�relsef�rdigheter, 2 po�ng Hantverk.";

	
	bakgrundstabeller.nermadasbefolkning[19] = {};
	bakgrundstabeller.nermadasbefolkning[19].rubrik="H�rold";
	bakgrundstabeller.nermadasbefolkning[19].bestamd="h�rolden";
	bakgrundstabeller.nermadasbefolkning[19].obestamd="en h�rold";
	bakgrundstabeller.nermadasbefolkning[19].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[19].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[19].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[19].beskrivning="Det faller p� h�roldens lott att b�de skapa passande vapensk�ldar och med tillb�rlig inlevelse tillk�nnage sin herres n�rvaro, s� dessa ibland adliga m�n och kvinnor m�ste ha s�v�l hantverksm�ssig skicklighet som f�rm�ga att ta folk.";
	bakgrundstabeller.nermadasbefolkning[19].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 2 po�ng Hantverk.";

	
	bakgrundstabeller.nermadasbefolkning[20] = {};
	bakgrundstabeller.nermadasbefolkning[20].rubrik="Indrivare";
	bakgrundstabeller.nermadasbefolkning[20].bestamd="indrivaren";
	bakgrundstabeller.nermadasbefolkning[20].obestamd="en indrivare";
	bakgrundstabeller.nermadasbefolkning[20].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[20].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[20].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[20].beskrivning="De flesta indrivare �r f�ga mer �n utpressare som jobbar f�r �nnu v�rre skurkar, men vissa av dem tj�nar n�gorlunda legitima herrar. Metoderna �r dock ofta desamma.";
	bakgrundstabeller.nermadasbefolkning[20].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Sociala f�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[21] = {};
	bakgrundstabeller.nermadasbefolkning[21].rubrik="Jordbrukare";
	bakgrundstabeller.nermadasbefolkning[21].bestamd="jordbrukaren";
	bakgrundstabeller.nermadasbefolkning[21].obestamd="en jordbrukare";
	bakgrundstabeller.nermadasbefolkning[21].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[21].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[21].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[21].beskrivning="Vare sig de driver boskap eller tvingar ur jorden dess ibland magra sk�rdar �r det jordbrukarna som tillsammans med fiskare och j�gare st�r f�r att driva upp den mat som alla beh�ver.";
	bakgrundstabeller.nermadasbefolkning[21].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Vildmarksf�rdigheter, 2 po�ng Hantverk.";

	
	bakgrundstabeller.nermadasbefolkning[22] = {};
	bakgrundstabeller.nermadasbefolkning[22].rubrik="J�gare";
	bakgrundstabeller.nermadasbefolkning[22].bestamd="j�garen";
	bakgrundstabeller.nermadasbefolkning[22].obestamd="en j�gare";
	bakgrundstabeller.nermadasbefolkning[22].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[22].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[22].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[22].beskrivning="Att jaga f�r f�dan �r inte s�rskilt vanligt i Nermada, och det �r inte ovanligt att en stor del av den professionella j�garens tid g�r �t till att h�lla ett vakande �ga p� l�nsherrens marker.";
	bakgrundstabeller.nermadasbefolkning[22].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[23] = {};
	bakgrundstabeller.nermadasbefolkning[23].rubrik="Konstn�r";
	bakgrundstabeller.nermadasbefolkning[23].bestamd="konstn�ren";
	bakgrundstabeller.nermadasbefolkning[23].obestamd="en konstn�r";
	bakgrundstabeller.nermadasbefolkning[23].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[23].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[23].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[23].beskrivning="Nermadas konstn�rer �r oftast skulpt�rer, men m�leriet h�ller p� att bli allt popul�rare och dess kvalitet allt h�gre. Konstn�rerna distanserar sig g�rna fr�n de hantverkare med vilka de delar m�nga drag, och �r inte s�llan av �del b�rd.";
	bakgrundstabeller.nermadasbefolkning[23].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 2 po�ng Hantverk."

	
	bakgrundstabeller.nermadasbefolkning[24] = {};
	bakgrundstabeller.nermadasbefolkning[24].rubrik="Kunskapare";
	bakgrundstabeller.nermadasbefolkning[24].bestamd="kunskaparen";
	bakgrundstabeller.nermadasbefolkning[24].obestamd="en kunskapare";
	bakgrundstabeller.nermadasbefolkning[24].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[24].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[24].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[24].beskrivning="Kunskap �r makt, och det finns alltid n�gon som �r beredd att betala f�r hemligheter.";
	bakgrundstabeller.nermadasbefolkning[24].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter R�relsef�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[25] = {};
	bakgrundstabeller.nermadasbefolkning[25].rubrik="Kurirryttare";
	bakgrundstabeller.nermadasbefolkning[25].bestamd="kurirryttaren";
	bakgrundstabeller.nermadasbefolkning[25].obestamd="en kurirryttare";
	bakgrundstabeller.nermadasbefolkning[25].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[25].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[25].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[25].beskrivning="Att f�rdas med bud st�ller stora krav p� s�v�l kuriren som hans riddjur. Det finns budb�rare som arbetar f�r vem som �n kan betala, men i allm�nhet �r de anst�llda av n�gon �dling eller f�rm�gen person.";
	bakgrundstabeller.nermadasbefolkning[25].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter R�relsef�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[26] = {};
	bakgrundstabeller.nermadasbefolkning[26].rubrik="K�pman";
	bakgrundstabeller.nermadasbefolkning[26].bestamd="k�pmannen";
	bakgrundstabeller.nermadasbefolkning[26].obestamd="en k�pman";
	bakgrundstabeller.nermadasbefolkning[26].pluralobestamd="gisslan";
	bakgrundstabeller.nermadasbefolkning[26].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[26].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[26].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[26].beskrivning="�ven om konkurrensen bland k�pm�nnen �r h�rd anser m�nga att det �r v�rt att ge sig in i den eviga kampen om den b�sta aff�ren. De fr�msta blir ocks� n�rmast ofattbart rika.";
	bakgrundstabeller.nermadasbefolkning[26].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[27] = {};
	bakgrundstabeller.nermadasbefolkning[27].rubrik="Legosoldat";
	bakgrundstabeller.nermadasbefolkning[27].bestamd="legosoldaten";
	bakgrundstabeller.nermadasbefolkning[27].obestamd="en legosoldat";
	bakgrundstabeller.nermadasbefolkning[27].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[27].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[27].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[27].beskrivning="De som strider f�r den som kan betala betraktas ofta som ett orosmoment i de styrandes �gon, men samtidigt beh�vs deras tj�nster och de kan ibland dra in en god sold.";
	bakgrundstabeller.nermadasbefolkning[27].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter."

	
	bakgrundstabeller.nermadasbefolkning[28] = {};
	bakgrundstabeller.nermadasbefolkning[28].rubrik="L�kekunnig";
	bakgrundstabeller.nermadasbefolkning[28].bestamd="den l�kekunniga";
	bakgrundstabeller.nermadasbefolkning[28].obestamd="en l�kekunnig";
	bakgrundstabeller.nermadasbefolkning[28].kunskapmysterier=1;
	bakgrundstabeller.nermadasbefolkning[28].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[28].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[28].beskrivning="Vare sig hon �r en medikus i en stad eller en klok gumma p� landsbygden �r den l�kekunniga mycket uppskattad, �ven om det alltid finns de som viskar bakom hennes rygg om k�llan till hennes kunskap.";
	bakgrundstabeller.nermadasbefolkning[28].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[29] = {};
	bakgrundstabeller.nermadasbefolkning[29].rubrik="Munk";
	bakgrundstabeller.nermadasbefolkning[29].bestamd="munken";
	bakgrundstabeller.nermadasbefolkning[29].obestamd="en munk";
	bakgrundstabeller.nermadasbefolkning[29].kunskapmysterier=1;
	bakgrundstabeller.nermadasbefolkning[29].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[29].valfriaenheter=4;
	bakgrundstabeller.nermadasbefolkning[29].beskrivning="Innanf�r klostrens skyddande v�ggar kan de varmt troende reflektera �ver trons mysterier och dessutom f�rkovra sig i allehanda l�rdom och f�rdigheter, allt efter sin ordens krav och sina egna talanger.";
	bakgrundstabeller.nermadasbefolkning[29].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.nermadasbefolkning[30] = {};
	bakgrundstabeller.nermadasbefolkning[30].rubrik="Ockrare";
	bakgrundstabeller.nermadasbefolkning[30].bestamd="ockraren";
	bakgrundstabeller.nermadasbefolkning[30].obestamd="en ockrare";
	bakgrundstabeller.nermadasbefolkning[30].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[30].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[30].valfriaenheter=4;
	bakgrundstabeller.nermadasbefolkning[30].beskrivning="Att livn�ra sig p� att l�na ut pengar anses l�ngt ifr�n hederv�rt, men den skicklige ockraren kan bli f�rm�gen och leva i ett �verfl�d som annars �r f�rbeh�llet adeln.";
	bakgrundstabeller.nermadasbefolkning[30].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 4 valfria enheter."

	
	bakgrundstabeller.nermadasbefolkning[31] = {};
	bakgrundstabeller.nermadasbefolkning[31].rubrik="Officer";
	bakgrundstabeller.nermadasbefolkning[31].bestamd="officeren";
	bakgrundstabeller.nermadasbefolkning[31].obestamd="en officer";
	bakgrundstabeller.nermadasbefolkning[31].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[31].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[31].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[31].beskrivning="Besluten om var trupper ska placeras p� slagf�lt och hur �vergripande strategier ska l�ggas upp fattas av bef�l som antingen sj�lva �r av nobel b�rd eller tj�nar n�gon �dling. Dessa krigskonstens fr�msta leder dessutom dj�rvt trupper i strid.";
	bakgrundstabeller.nermadasbefolkning[31].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Kunskapsf�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[32] = {};
	bakgrundstabeller.nermadasbefolkning[32].rubrik="Pirat";
	bakgrundstabeller.nermadasbefolkning[32].bestamd="piraten";
	bakgrundstabeller.nermadasbefolkning[32].obestamd="en pirat";
	bakgrundstabeller.nermadasbefolkning[32].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[32].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[32].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[32].beskrivning="Havets fasor h�rjar �ven kring det fredliga Nermada, med s�v�l brutala �verfall till havs som snabba strandhugg.";
	bakgrundstabeller.nermadasbefolkning[32].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter."

	
	bakgrundstabeller.nermadasbefolkning[33] = {};
	bakgrundstabeller.nermadasbefolkning[33].rubrik="Prisj�gare";
	bakgrundstabeller.nermadasbefolkning[33].bestamd="prisj�garen";
	bakgrundstabeller.nermadasbefolkning[33].obestamd="en prisj�gare";
	bakgrundstabeller.nermadasbefolkning[33].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[33].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[33].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[33].beskrivning="Uppdragen att jaga ner personer p� flykt kommer omv�xlande fr�n den d�mande makten och fr�n rika och h�mndlystna privatpersoner. Vilka uppdrag prisj�garen tas styrs av dennes moral och m�jlighet att v�lja och vraka, s�tillvida han inte �r anst�lld av n�gon vars order han bara har att lyda.";
	bakgrundstabeller.nermadasbefolkning[33].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter R�relsef�rdigheter 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[34] = {};
	bakgrundstabeller.nermadasbefolkning[34].rubrik="Pr�st";
	bakgrundstabeller.nermadasbefolkning[34].bestamd="pr�sten";
	bakgrundstabeller.nermadasbefolkning[34].kunskapmysterier=1;
	bakgrundstabeller.nermadasbefolkning[34].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[34].mystikfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[34].beskrivning="Vare sig man f�rmedlar Aurias och Pelias budskap eller tolkar Daaks heliga ord �r pr�sten en mycket viktig och i allm�nhet respekterad person.";
	bakgrundstabeller.nermadasbefolkning[34].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Kunskapsf�rdigheter, 4 enheter Mystikf�rdigheter."

	
	bakgrundstabeller.nermadasbefolkning[35] = {};
	bakgrundstabeller.nermadasbefolkning[35].rubrik="Riddare";
	bakgrundstabeller.nermadasbefolkning[35].bestamd="riddaren";
	bakgrundstabeller.nermadasbefolkning[35].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[35].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[35].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[35].beskrivning="Att tj�na sin l�nsherre med vapen i hand �r ett s�tt att leva och en k�lla till stolthet f�r Nermadas riddare.";
	bakgrundstabeller.nermadasbefolkning[35].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Sociala f�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[36] = {};
	bakgrundstabeller.nermadasbefolkning[36].rubrik="Sj�farare";
	bakgrundstabeller.nermadasbefolkning[36].bestamd="sj�fararen";
	bakgrundstabeller.nermadasbefolkning[36].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[36].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[36].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[36].beskrivning="Ingen kan ber�tta lika mycket om fr�mmande l�nder och m�rkliga folk som en berest sj�man, men f� stretar heller lika h�rt eller riskerar lika mycket.";
	bakgrundstabeller.nermadasbefolkning[36].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter R�relsef�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[37] = {};
	bakgrundstabeller.nermadasbefolkning[37].rubrik="Skrivare";
	bakgrundstabeller.nermadasbefolkning[37].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[37].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[37].hantverkpoang=2;
	bakgrundstabeller.nermadasbefolkning[37].beskrivning="�ven om de flesta nermadier kan l�sa och skriva �tminstone hj�lpligt finns det goda m�jligheter till arbeten f�r den som snabbt och elegant kan f�sta ord p� pr�nt.";
	bakgrundstabeller.nermadasbefolkning[37].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Kunskapsf�rdigheter, 2 po�ng Hantverk.";

	
	bakgrundstabeller.nermadasbefolkning[38] = {};
	bakgrundstabeller.nermadasbefolkning[38].rubrik="Sk�ka";
	bakgrundstabeller.nermadasbefolkning[38].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[38].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[38].expertispoang=2;
	bakgrundstabeller.nermadasbefolkning[38].beskrivning="Vare sig hon �r mer eller mindre slav p� n�gon bordell eller bespottad sockenhora ute p� landet �r sk�kan en kvinna som folk fr�n alla samh�llsskikt s�v�l f�raktar som g�r aff�rer med.";
	bakgrundstabeller.nermadasbefolkning[38].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.nermadasbefolkning[39] = {};
	bakgrundstabeller.nermadasbefolkning[39].rubrik="Arbetsslav";
	bakgrundstabeller.nermadasbefolkning[39].bestamd="arbetsslaven";
	bakgrundstabeller.nermadasbefolkning[39].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[39].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[39].valfriaenheter=4;
	bakgrundstabeller.nermadasbefolkning[39].beskrivning="�ven om slaveriets omfattning har minskat anv�nds slavar alltj�mt f�r en hel del ofta h�rda och farliga arbeten.";
	bakgrundstabeller.nermadasbefolkning[39].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter R�relsef�rdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.nermadasbefolkning[40] = {};
	bakgrundstabeller.nermadasbefolkning[40].rubrik="Gladiator";
	bakgrundstabeller.nermadasbefolkning[40].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[40].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[40].kanneteckenpoang=2;
	bakgrundstabeller.nermadasbefolkning[40].beskrivning="De k�mpar som strider p� gladiatorarenorna �r aldrig fria, men de kan vinna en ber�mmelse som arbetsslavar aldrig kommer i n�rheten av.";
	bakgrundstabeller.nermadasbefolkning[40].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Stridsf�rdigheter, 2 po�ng K�nnetecken."

	
	bakgrundstabeller.nermadasbefolkning[41] = {};
	bakgrundstabeller.nermadasbefolkning[41].rubrik="Slavhandlare";
	bakgrundstabeller.nermadasbefolkning[41].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[41].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[41].expertispoang=2;
	bakgrundstabeller.nermadasbefolkning[41].beskrivning="Slavhandlarna f�r en allt mer tynande tillvaro i en tid n�r de flesta slavar f�ds in i sina roller och ofta tj�nar samma herre eller sl�kt under hela sina liv. �nnu g�r det dock att g�ra stora vinster i handeln med slavar som �r dugliga eller p� andra s�tt intressanta.";
	bakgrundstabeller.nermadasbefolkning[41].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Sociala f�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.nermadasbefolkning[42] = {};
	bakgrundstabeller.nermadasbefolkning[42].rubrik="Smugglare";
	bakgrundstabeller.nermadasbefolkning[42].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[42].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[42].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[42].beskrivning="D�r det finns n�gon som kr�ver in tullar finns det n�gon som lever p� att f�rs�ka frakta varor utan att beh�va dela med sig av sina pengar.";
	bakgrundstabeller.nermadasbefolkning[42].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter."

	
	bakgrundstabeller.nermadasbefolkning[43] = {};
	bakgrundstabeller.nermadasbefolkning[43].rubrik="Soldat";
	bakgrundstabeller.nermadasbefolkning[43].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[43].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[43].valfriaenheter=4;
	bakgrundstabeller.nermadasbefolkning[43].beskrivning="Som soldaten tillh�r man de fasta milit�ra styrkorna, och f�r en anst�ndig stridstr�ning.";
	bakgrundstabeller.nermadasbefolkning[43].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Stridsf�rdigheter, 4 valfria enheter.";

	
	bakgrundstabeller.nermadasbefolkning[44] = {};
	bakgrundstabeller.nermadasbefolkning[44].rubrik="Spelare";
	bakgrundstabeller.nermadasbefolkning[44].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[44].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[44].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[44].beskrivning="Spelaren f�rs�rjer sig p� att bedriva hasardspel eller vadslagningar, men f� har den enorma talang eller sansl�sa tur som kr�vs f�r att alltid kunna s�kra en vinst p� �rligt vis.";
	bakgrundstabeller.nermadasbefolkning[44].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter R�relsef�rdigheter, 4 enheter Sociala f�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[45] = {};
	bakgrundstabeller.nermadasbefolkning[45].rubrik="Stadsvakt";
	bakgrundstabeller.nermadasbefolkning[45].striderdrabbningar=1;
	bakgrundstabeller.nermadasbefolkning[45].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[45].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[45].beskrivning="Den dagliga tillvaron f�r stadsvakterna �r s�llan s�rskilt sp�nnande, men st�derna kan inte vara utan dem och det finns vissa m�jligheter att avancera till b�ttre avl�nade tj�nster.";
	bakgrundstabeller.nermadasbefolkning[45].beskrivninghak = "1 slag p� Strider \& drabbningar, 4 enheter Sociala f�rdigheter, 4 enheter Stridsf�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[46] = {};
	bakgrundstabeller.nermadasbefolkning[46].rubrik="Str�tr�vare";
	bakgrundstabeller.nermadasbefolkning[46].farderaventyr=1;
	bakgrundstabeller.nermadasbefolkning[46].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[46].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[46].beskrivning="Grupper av desperata m�n och kvinnor sl�r sig ibland ihop och driver runt p� landsbygden, d�r de stj�l vad de kan under hot om och ut�vande av v�ld. [1 slag p� F�rder & �ventyr, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.]";
	bakgrundstabeller.nermadasbefolkning[46].beskrivninghak = "1 slag p� F�rder \& �ventyr, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[47] = {};
	bakgrundstabeller.nermadasbefolkning[47].rubrik="Tempelriddare";
	bakgrundstabeller.nermadasbefolkning[47].kunskapmysterier=1;
	bakgrundstabeller.nermadasbefolkning[47].stridsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[47].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[47].beskrivning="Varje religion kan f�rr eller senare beh�va f�rsvaras med vapen i hand, och dessa strider �r tempelriddarnas uppdrag.";
	bakgrundstabeller.nermadasbefolkning[47].beskrivninghak = "1 slag p� Kunskap \& mysterier, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[48] = {};
	bakgrundstabeller.nermadasbefolkning[48].rubrik="Tjuv";
	bakgrundstabeller.nermadasbefolkning[48].bestamd="tjuven";
	bakgrundstabeller.nermadasbefolkning[48].pluralobestamd="tjuvar";
	bakgrundstabeller.nermadasbefolkning[48].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[48].rorelsefardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[48].vildmarksfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[48].beskrivning="Tjuvens tveksamma syssla kan best� av allt fr�n simpla fickst�lder n�r ingen tittar till halsbrytande fasadkl�ttring f�r att bryta sig in hos den som tror sig vara s�ker bakom h�ga murar.";
	bakgrundstabeller.nermadasbefolkning[48].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter R�relsef�rdigheter, 4 enheter Vildmarksf�rdigheter.";

	
	bakgrundstabeller.nermadasbefolkning[49] = {};
	bakgrundstabeller.nermadasbefolkning[49].rubrik="V�rdshusv�rd";
	bakgrundstabeller.nermadasbefolkning[49].valfriatabellslag=1;
	bakgrundstabeller.nermadasbefolkning[49].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[49].expertispoang=2;
	bakgrundstabeller.nermadasbefolkning[49].beskrivning="Det st�lle som kan tillhandah�lla �tlig mat, starka drycker och anst�ndigt loppfria b�ddar kan utg�ra ett v�lkommet inslag i stadsbilden eller vara en bys sj�lva centrum, och somliga v�rdshusv�rdar lever mycket gott p� sin verksamhet.";
	bakgrundstabeller.nermadasbefolkning[49].beskrivninghak = "1 slag p� valfri tabell, 4 enheter Sociala f�rdigheter, 2 po�ng Expertiser.";

	
	bakgrundstabeller.nermadasbefolkning[50] = {};
	bakgrundstabeller.nermadasbefolkning[50].rubrik="�ktenskapsm�klare";
	bakgrundstabeller.nermadasbefolkning[50].intrigerillgarningar=1;
	bakgrundstabeller.nermadasbefolkning[50].kunskapsfardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[50].socialafardigheterenheter=4;
	bakgrundstabeller.nermadasbefolkning[50].beskrivning="Kanske finns det inget mer typiskt nermadiskt yrke �n den nobla syssels�ttningen att f�rhandla fram �ktenskap.";
	bakgrundstabeller.nermadasbefolkning[50].beskrivninghak = "1 slag p� Intriger \& illg�rningar, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter."
	
	
	
	
	bakgrundstabeller.damarien = [];
	bakgrundstabeller.damarien[0] = {};
	bakgrundstabeller.damarien[0].subval = [[[]]];
	bakgrundstabeller.damarien[0].vald = 0;
    bakgrundstabeller.damarien[0].rubrik="Damarien";
    bakgrundstabeller.damarien[0].namn="damarien";
	
	bakgrundstabeller.damarien[1] = {};
	bakgrundstabeller.damarien[1].rubrik="Alkemist";
	bakgrundstabeller.damarien[1].beskrivning="Alkemisten viger sitt liv �t att f�rena magi, vetenskap och ockultism. Vissa n�r erk�nnande men m�nga slutar som galningar efter att ha luktat f�r djupt i de dunster som salter och syror uts�ndrar. De flesta alkemister i Damarien �r medlemmar i den mystiska och h�gt ansedda Santimarexorden och m�nga av dem �r ursprungligen flyktingar fr�n Jargien, d�r alkemister ofta f�rf�ljs av inkvisitionen.";
	bakgrundstabeller.damarien[1].kunskapmysterier=1;
	bakgrundstabeller.damarien[1].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[1].mystikfardigheterenheter=4;
	
	
	bakgrundstabeller.damarien[2] = {};
	bakgrundstabeller.damarien[2].rubrik="Ambulier";
	bakgrundstabeller.damarien[2].beskrivning="M�nga av de fedaker som slagit sig ned i Damarien har beh�llit sin kringresande livsstil. De mest legendariska av dessa �r ambulierna, eller knallarna, g�rdfarihandlare som reser mellan byar och gods och f�rs�rjer sig genom att byta sina egna hantverk och alla m�jliga varor de kommit �ver under sina resor. M�nga sagor och vidskepelser har uppst�tt kring dem och det s�gs att resande k�pm�n �r s�rskilt beskyddade av S:t Argora. Ofta v�gar inte ens Kristallordens krigare attackera en knalle som b�r helgonets amulett p� sitt br�st.";
	bakgrundstabeller.damarien[2].farderaventyr=1;
	bakgrundstabeller.damarien[2].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[2].hantverkpoang=2;
	
	
	

	
	bakgrundstabeller.damarien[3] = {};
	bakgrundstabeller.damarien[3].rubrik="Apotekare";
	bakgrundstabeller.damarien[3].beskrivning="I tr�nga butiker i st�derna, stugor p� landsbygden eller t�ckta vagnar som r�r sig mellan byarna f�rr�ttar apotekarna sitt v�rv. De f�rser folket med extrakt, salvor och dekokter som s�gs bota allt fr�n magont, eksem och varande s�r till h�ravfall, impotens och tandv�rk. Vissa kan konsten att s�tta stopp f�r o�nskade graviditeter och andra s�ljer gifter utan att st�lla n�gra fr�gor.";
	bakgrundstabeller.damarien[3].farderaventyr=1;
	bakgrundstabeller.damarien[3].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[3].vildmarksfardigheterenheter=4;
	


	bakgrundstabeller.damarien[4] = {};
	bakgrundstabeller.damarien[4].rubrik="Arkitekt";
	bakgrundstabeller.damarien[4].beskrivning="Innan Helmslakten hade staden en av Asharinahalv�ns viktigaste l�roanstalter f�r arkitektur och byggkonst, d�r dv�rgar och m�nniskor med sm� medel tillsammans frambringade imponerande byggnadsverk. Sedan Helms f�rd�rv har mycket g�tt f�rlorat, men i och med �teruppbyggnaden av Helm, Mirrons snabba tillv�xt och Thamas intensiva upprustning av Damariens borgar finns det gott om arbete f�r arkitekter. Precis som i Kejsard�met �r arkitekter h�gt sedda, men det �r �ven en riskabel position d� det �r farligt att k�nna till hemligheterna hos m�ktiga h�rskares byggprojekt. Det �r inte ovanligt att arkitekter som konstruerat borgar �t storfursten eller adelsm�n f�rsvinner sp�rl�st s� snart projektet fullbordats.";
	bakgrundstabeller.damarien[4].intrigerillgarningar=1;
	bakgrundstabeller.damarien[4].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[4].socialafardigheterenheter=4;
	
	

	bakgrundstabeller.damarien[5] = {};
	bakgrundstabeller.damarien[5].rubrik="Barberare";
	bakgrundstabeller.damarien[5].beskrivning="Barberarna �r respekterade hantverkare som tar betalt f�r att klippa h�r, l�gga frisyrer och trimma sk�gg �t alla som har r�d. Men �ven om de �r mest k�nda f�r sk�nhetsv�rd s� �r barberarens arbete l�ngt mer m�ngfacetterat �n s�, d� m�nga av dem mot betalning bland annat drar ut kunders v�rkande t�nder, �derl�ter dem med iglar eller till och med utf�r enklare kirurgi och amputationer. Detta g�r att m�nga damarier f�r kalla k�rar vid �synen av de r�da och vita st�nger som m�rker ut barberarbodarna, d�r den r�da f�rgen symboliserar blod och den vita bandage. En barberare kommer ofta mycket n�ra sina kunder och kan d�rf�r ibland vara i besittning av v�ldigt k�nslig, privat information om dessa.";
	bakgrundstabeller.damarien[5].intrigerillgarningar=1;
	bakgrundstabeller.damarien[5].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[5].hantverkpoang=2;
	
	

	bakgrundstabeller.damarien[6] = {};
	bakgrundstabeller.damarien[6].rubrik="Bard";
	bakgrundstabeller.damarien[6].beskrivning="Med flinka fingrar �ver en lyras str�ngar f�rr�ttar barden sitt v�rv. S�nger framf�rs som s�tter hj�rtan i brand, f�r t�rar att fl�da, leenden att sprida sig och skratt att klinga. Barden �r en sagober�ttare, s�ngare, poet och underh�llare. De mest misslyckade barderna �r inte mycket mer �n tiggare som i lappade kl�der spelar p� spruckna instrument medan de mest lyckade upptr�der uteslutande f�r de rikaste sl�kterna och till och med inf�r storfurstens hov.";
	bakgrundstabeller.damarien[6].farderaventyr=1;
	bakgrundstabeller.damarien[6].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[6].socialafardigheterenheter=4;
	
	

	bakgrundstabeller.damarien[7] = {};
	bakgrundstabeller.damarien[7].rubrik="Besv�rjare";
	bakgrundstabeller.damarien[7].beskrivning="�ven om m�nga damarier k�nner djup fruktan och avsky f�r besv�rjare och trots att Daaks pr�ster predikar om de m�rka konsternas ondska kan magiker ofta �ppet ut�va sin konst i storfurstend�met. Under �rhundraden har otaliga h�xor och trollkarlar flytt fr�n kejsard�met f�r att s�ka en fristad i Damarien. Endast ett f�tal gillen till�ts verka, det viktigaste av dessa �r de magiker som �r organiserade i Santimarexorden. Men inte ens d�r kan en magiker k�nna sig helt trygg, d� de Daaktroende Sebaeliterna, storfurstens kunskapare eller en ensam h�xj�gare n�r som helst kan f� f�r sig att dennes studier i de f�rbjudna konsterna g�tt f�r l�ngt och m�ste g�ras slut p� en g�ng f�r alla.";
	bakgrundstabeller.damarien[7].kunskapmysterier=1;
	bakgrundstabeller.damarien[7].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[7].mystikfardigheterenheter=4;
	
	.

	bakgrundstabeller.damarien[8] = {};
	bakgrundstabeller.damarien[8].rubrik="Boktryckare";
	bakgrundstabeller.damarien[8].beskrivning="Med bl�ckst�nkta h�nder och en stressad uppsyn s� driver boktryckarna p� med sin produktion av att trycka b�cker �t kyrkan och privata akt�rer. De ristar hela sidor i tr� och trycker sedan dessa, d� dv�rgiska bokpressar med r�rliga typer alltj�mt v�l f�rborgad hemlighet. Boktryckarnas hantverk ses p� med misstanke och �r mycket ogillade av skrivarna d� deras roll blir alltmer f�rsvagad ju fler b�cker som trycks. Boktryckning utan storfurstens uttryckliga till�telse �r f�rbjudet, d� detta ses som ett farligt s�tt att sprida upproriska tankar. De tryckare som finns �vervakas antingen str�ngt av kronans kunskapare eller s� arbetar de i det f�rdolda.";
	bakgrundstabeller.damarien[8].kunskapmysterier=1;
	bakgrundstabeller.damarien[8].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[8].hantverkpoang=2;
	
	

	bakgrundstabeller.damarien[9] = {};
	bakgrundstabeller.damarien[9].rubrik="Brottsling";
	bakgrundstabeller.damarien[9].pluralobestamd="brottslingar";
	bakgrundstabeller.damarien[9].beskrivning="�ven i l�nder med brutala r�ttsv�senden finns det gott om m�nniskor som av olika sk�l beslutat sig f�r att leva det farliga livet som brottslingar och f�rs�rja sig p� r�n, smuggling, inbrott och beskyddarverksamhet. M�nga av dem som lever p� samh�llets skuggsida f�rsvarar sig med att de inte g�r n�got som inte storfursten och hans hejdukar sj�lva �gnar sig �t, men de flesta brottslingar g�r helt enkelt det de g�r f�r att �verleva �nnu en dag i en grym v�rld.";
	bakgrundstabeller.damarien[9].intrigerillgarningar=1;
	bakgrundstabeller.damarien[9].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[9].stridsfardigheterenheter=4;
	

	bakgrundstabeller.damarien[10] = {};
	bakgrundstabeller.damarien[10].rubrik="Daakmunk/Daaknunna";
	bakgrundstabeller.damarien[10].obestamd="en munk/nunna";
	bakgrundstabeller.damarien[10].bestamd="munken/nunnan";
	bakgrundstabeller.damarien[10].obestamdplural="munkar/nunnor";
	bakgrundstabeller.damarien[10].bestamdplural="munkarna/nunnorna";
	bakgrundstabeller.damarien[10].beskrivning="De finns de troende som v�ljer att sv�ra sig till Daak och g� i kloster f�r att d�r tj�na honom. En del kloster ligger isolerade l�ngt ute p� landsbygden medan andra �r bel�gna mitt i st�der d�r man dagligen har kontakt med stadsborna. Vissa kloster �r mycket strikta med tysthetsl�fte och straff f�r minsta f�rseelse men i andra sker f�rbjudna ting bakom murarna och d�r handlar l�ftet snarare om att inte avsl�ja n�got f�r utomst�ende.";
	bakgrundstabeller.damarien[10].kunskapmysterier=1;
	bakgrundstabeller.damarien[10].kunskapsfardigheter=4;
	bakgrundstabeller.damarien[10].valfriaenheter=4;
	
	

	bakgrundstabeller.damarien[11] = {};
	bakgrundstabeller.damarien[11].rubrik="Daakpr�st";
	bakgrundstabeller.damarien[11].beskrivning="Damarien �r ett m�rkt rike d�r falska gudar och demoner h�ller folket i ett j�rngrepp, men �ven h�r st�r enstaka kyrkor vigda till den sanna guden som ljus i ett fasansfullt m�rker. Pr�sterna har till uppgift att r�dda deras sj�lar och hj�lpa folket att finna Daak. De h�ller m�ssor, ger r�d och �r hj�lp och st�d till dem som har det sv�rt eller har drabbats av tvivel. M�nga har valt detta v�rv p� grund av sin tilltro till den ende guden och en vilja att g�ra gott men det finns de som, drivna av girighet och politiska ambitioner, anv�nder tron som ett redskap f�r att manipulera sina anh�ngare och svartm�la sina fiender.";
	bakgrundstabeller.damarien[11].kunskapmysterier=1;
	bakgrundstabeller.damarien[11].kunskapsfardigheter=4;
	bakgrundstabeller.damarien[11].mystikfardigheterenheter=4;
	
	

	bakgrundstabeller.damarien[12] = {};
	bakgrundstabeller.damarien[12].rubrik="Dansare";
	bakgrundstabeller.damarien[12].beskrivning="�ver hela storfurstend�met finns professionella dansare som roar h�g som l�g med sina rytmiska kroppsr�relser. D�r finns allt fr�n de hovdansare som underh�ller furstar med sin sk�nhet och grace till folkdansare som leder b�ndernas sk�rdefester. Det finns �ven de som genom sin dans ber�ttar om helgonens liv i kyrkans mysteriespel och de som dansar urgamla rituella danser f�r att �ra de gamla gudarna och de hedniska makterna.";
	bakgrundstabeller.damarien[12].intrigerillgarningar=1;
	bakgrundstabeller.damarien[12].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[12].kanneteckenpoang=2;
	


	bakgrundstabeller.damarien[13] = {};
	bakgrundstabeller.damarien[13].rubrik="Demagog";
	bakgrundstabeller.damarien[13].beskrivning="Ord kan flytta berg, r�ra folkmassor till handling och f� katastrofer att l�ta som gl�djebud. En del demagoger �r inte mer �n skr�vlare, andra �r karismatiska sektledare, anstiftare till blodiga uppror eller s�dana som �lskar att skapa konflikter. Vissa talare �r officiellt sanktionerade och uppbackade av storfursten f�r att sprida dennes ord till folket, andra �r uppviglare och rebeller som st�ndigt lever p� flykt undan kronans vrede.";
	bakgrundstabeller.damarien[13].valfriatabellslag=1;
	bakgrundstabeller.damarien[13].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[13].expertispoang=2;
	

	bakgrundstabeller.damarien[14] = {};
	bakgrundstabeller.damarien[14].rubrik="Dibukkultist";
	bakgrundstabeller.damarien[14].beskrivning="Allt som lever ska d�. Alla blommor ska vittra. S� �ven gudar, demoner och v�rlden sj�lv. Endast d�den best�r. M�nga damarier fruktar och hatar den obeveklige sk�rdemannen och hans m�nskliga anh�ngare, men m�nga fler dyrkar honom mer eller mindre �ppet i hopp om en plats i hans m�rka rike, d�r en stilla vind bl�ser genom t�rpilar och vallmoblommor och sk�nker de d�da en v�lsignad s�mn och lindring fr�n livets pl�gor. Andra ber till honom f�r skydd mot sp�ken och lamior och f� �r de som inte viker undan n�r de ser Dibuks barn, Kristallordens krigarorden, komma vandrande p� v�gen.";
	bakgrundstabeller.damarien[14].kunskapmysterier=1;
	bakgrundstabeller.damarien[14].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[14].stridsfardigheterenheter=4;
	
	

	bakgrundstabeller.damarien[15] = {};
	bakgrundstabeller.damarien[15].rubrik="Domare";
	bakgrundstabeller.damarien[15].beskrivning="De damariska domstolarna �r vida omtalade f�r sina okorrumperade och obarmh�rtiga domare som genomf�r storfurstens h�rda lagar efter att ha handplockats av denne. Under storfursten sj�lv st�r ett antal praeatorer, som ansvarar f�r lagen i varje hertig- och furstend�me och under dessa flera l�nsdomare, som styr �ver r�ttvisan i enskilda st�der eller grevskap. Domarna �r h�rda kvinnor och m�n som i f�rsta hand tj�nar Thamas och i andra hand n�gon form av r�ttvisa. De �r m�ktiga allierade, men har n�stan utan undantag m�nga inflytelserika fiender fr�n alla samh�llsklasser.";
	bakgrundstabeller.damarien[15].intrigerillgarningar=1;
	bakgrundstabeller.damarien[15].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[15].socialafardigheterenheter=4;
	
	

	bakgrundstabeller.damarien[16] = {};
	bakgrundstabeller.damarien[16].rubrik="Domedagspredikant";
	bakgrundstabeller.damarien[16].beskrivning="Den sista tiden n�rmar sig. Tecknen blir allt fler och snart kommer den m�rke Malgoarh och hans demoner att st�rta in i v�rlden och alla som inte �r svurna till Daak kommer slitas i stycken och torteras i all evighet. Domedagspredikanterna inser detta och f�rs�ker med h�ngivelse, f�rkunnanden och �ppna predikningar varna folket. Domedagspredikanterna kan man se p� torg, vandrande mellan st�der och utanf�r kyrkorna.";
	bakgrundstabeller.damarien[16].kunskapmysterier=1;
	bakgrundstabeller.damarien[16].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[16].socialafardigheterenheter=4;
	

	bakgrundstabeller.damarien[17] = {};
	bakgrundstabeller.damarien[17].rubrik="D�dgr�vare";
	bakgrundstabeller.damarien[17].beskrivning="Allt d�r f�rr eller senare. De rika s�tter mat i halsen och de fattiga sv�lter ihj�l. F�r d�dgr�varen spelar det ingen roll � alla ska de ned i jorden. Gravar skottas upp, kroppar s�nks ned och jord skyfflas �ver. En del tar extra tid och placerar en blomma p� graven och s�ger en b�n � andra plundrar de d�da p� allt de har och vissa s�ljer kroppar eller delar av kroppar till ljusskygga individer. D�dgr�vare ses p� med misstro d� det finns m�nga sagor och s�nger d�r d�dgr�vare s�gs st� i f�rbund med m�rkrets makter.";
	bakgrundstabeller.damarien[17].kunskapmysterier=1;
	bakgrundstabeller.damarien[17].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[17].expertispoang=2;
	
	

	bakgrundstabeller.damarien[18] = {};
	bakgrundstabeller.damarien[18].rubrik="Falenu";
	bakgrundstabeller.damarien[18].bestamd="falenun";
	bakgrundstabeller.damarien[18].obestamdplural="faleni";
	bakgrundstabeller.damarien[18].bestamdplural="falenierna";
	bakgrundstabeller.damarien[18].beskrivning="Fr�n norra Damarien kommer de mystiska faleni (sing	falenu) vars namn kommer fr�n det vallanboriska ordet f�r nattfj�rilar. Enligt s�gnen h�mtar nattfj�rilar de d�das sj�lar under natten och f�r dem till d�dsriket. En m�nniska som �r falenu �r en sorts hednisk pr�st eller andemedium som har en n�ra koppling till d�den, antingen genom att de d�tt och �terupplivats eller f�r att de haft en kraftfull n�ra-d�den-upplevelse. D� man tror att de sett den andra sidan betraktas de som de d�das spr�kr�r till de levande. Faleni kommer ursprungligen fr�n Vallanborien, men man kan finna enstaka �ver hela storfurstend�met.";
	bakgrundstabeller.damarien[18].kunskapmysterier=1;
	bakgrundstabeller.damarien[18].mystikfardigheterenheter=4;
	bakgrundstabeller.damarien[18].kanneteckenpoang=2;
	
	

	bakgrundstabeller.damarien[19] = {};
	bakgrundstabeller.damarien[19].rubrik="Fiskare";
	bakgrundstabeller.damarien[19].beskrivning="P� floder, sj�ar och vid Purpurhavets och Takalorrsundets grunda str�nder kan man se fiskarnas b�tar. Vattnet �r deras levebr�d. Fr�n djupet drar de upp sprattlande fiskar som gl�nser likt silver i solskenet. De lagar sina n�t p� st�llningar vid str�nderna och r�ker, saltar och j�ser sin f�ngst. M�nga �r vidskepliga och alla har de en respekt f�r v�drets makter, i synnerhet stormarna, som v�lter deras b�tar och offrar dem till djupet.";
	bakgrundstabeller.damarien[19].farderaventyr=1;
	bakgrundstabeller.damarien[19].vildmarksfardigheterenheter=4;
	bakgrundstabeller.damarien[19].expertispoang=2;
	
	

	bakgrundstabeller.damarien[20] = {};
	bakgrundstabeller.damarien[20].rubrik="Flagellant";
	bakgrundstabeller.damarien[20].beskrivning="Kl�dd i trasor och med s�nderpiskad rygg vandrar flagellanten genom Damarien. Denne �r uppfylld av den heliga profeten Udars lidande och m�ssar osammanh�ngande f�r alla som vill lyssna. Vissa blir flagellanter efter religi�sa visioner, andra som straff f�r sina synder. F�r att visa Udars barmh�rtighet tar en del med sig f�r�ldral�sa barn i sitt f�lje och l�ter dem leva p� allmosorna. De smetar in barnens kinder med sitt blod tills barnen �r gamla nog att sj�lva ta upp piskan och delta i sj�lvsp�kelsen � den heligaste av riter.";
	bakgrundstabeller.damarien[20].farderaventyr=1;
	bakgrundstabeller.damarien[20].vildmarksfardigheterenheter=4;
	bakgrundstabeller.damarien[20].expertispoang=2;
	
	

	bakgrundstabeller.damarien[21] = {};
	bakgrundstabeller.damarien[21].rubrik="Fogde";
	bakgrundstabeller.damarien[21].beskrivning="Inte ens kronans nattgardister �r mer fruktade och avskydda av allmogen �n storfurstens fogdar. Fogdarna �r �mbetsm�n utsedda av storfursten och f�rvaltar exempelvis slott och tillh�rande g�rdar, en stad eller till och med en gruva �t kronan. De driver in skatter fr�n omr�det, s�ljer de skatter som betalas i form av boskap eller varor, och ansvarar ocks� f�r att en del skattemedel anv�nds lokalt, till exempel f�r att underh�lla v�gar och marknadsplatser. Dessa m�n och kvinnor har extremt l�ngtg�ende befogenheter n�r det g�ller att driva in skatterna och drar sig inte f�r att statuera exempel om det beh�vs. De �r dock relativt okorrumperade d� de avl�nas direkt av kronan och det �r str�nga straff f�r den fogde som f�rs�ker driva in extra medel �t sig sj�lv.";
	bakgrundstabeller.damarien[21].intrigerillgarningar=1;
	bakgrundstabeller.damarien[21].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[21].stridsfardigheterenheter=4;
	
	

	bakgrundstabeller.damarien[22] = {};
	bakgrundstabeller.damarien[22].rubrik="Forskare";
	bakgrundstabeller.damarien[22].beskrivning="I Hammarn�s, Mirron och Targus kan man finna sammanslutningar av l�rda m�n och kvinnor som arbetar f�r att f�rdjupa sina kunskaper m�nniskan, naturen, historia eller teologi. En del forskare arbetar p� institutioner st�dda av kronan eller kyrkan, men de allra flesta �r personer med pengar och tid nog att f�rdjupa sig i v�rldens mysterier. M�nga l�rda har under �ren flytt till Damarien fr�n Kejsard�met, d� Damariens h�rskare n�stan alltid varit mer f�rl�tande mot forskning som i andra l�nder betraktats som h�disk.";
	bakgrundstabeller.damarien[22].kunskapmysterier=1;
	bakgrundstabeller.damarien[22].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[22].expertispoang=2;	
	
	bakgrundstabeller.damarien[23] = {};
	bakgrundstabeller.damarien[23].rubrik="F�ltsk�r";
	bakgrundstabeller.damarien[23].beskrivning="N�r det sker stridigheter d�r de flesta l�ngt efter slaget av sina skador. F�ltsk�ren f�rs�ker r�dda livet p� dem. Denne l�kekunnige �r van att resa med soldater eller h�ller sig n�ra borgar och gr�nsposteringar. F�ltsk�rer �r skickliga p� att stoppa bl�dningar, spj�lka ben och genomf�ra vissa enklare kirurgiska ingrepp men trots detta dukar m�nga av patienterna under och f� har sett s� mycket lidande i livets sista timmar som dessa m�n och kvinnor.";
	bakgrundstabeller.damarien[23].striderdrabbningar=1;
	bakgrundstabeller.damarien[23].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[23].stridsfardigheterenheter=4;
	
	bakgrundstabeller.damarien[24] = {};
	bakgrundstabeller.damarien[24].rubrik="Gatuf�rs�ljare";
	bakgrundstabeller.damarien[24].beskrivning="Skrikandes erbjudanden om f�rsk fisk, vackra tyger, nybakt br�d och v�ldoftande oljor st�r gatuf�rs�ljarna i sina sm� aff�rer och lockar in folkhopen f�r att k�pa deras varor. Med snabba ord som likt ljuv musik s�ker sig in i kundernas �ron s�ljer de sina varor. De anv�nder alla knep som finns f�r att klara vardagen och samtidigt f�rs�ka h�lla uppe sitt rykte till morgondagen.";
	bakgrundstabeller.damarien[24].intrigerillgarningar=1;
	bakgrundstabeller.damarien[24].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[24].expertispoang=2;
	
	
	bakgrundstabeller.damarien[25] = {};
	bakgrundstabeller.damarien[25].rubrik="Gisslan";
	bakgrundstabeller.damarien[25].bestamd="gisslan";
	bakgrundstabeller.damarien[25].pluralobestamd="gisslan";
	bakgrundstabeller.damarien[25].pluralbestamd="gisslan";
	bakgrundstabeller.damarien[25].beskrivning="Att s�nda sina barn, �kta h�lft eller andra sl�ktingar till fienden som en s�kerhet f�r ett avtal har alltid f�rekommit i den damariska adeln, men under Thamas regering har det blivit en institution. I n�stan alla adelsfamiljer, fr�n de m�ktigaste furste�tterna till de enklaste mark�gare, har n�gon kommenderats till Targus f�r det som kallas kronans g�stfrihet av storfursten. Gisslan behandlas oftast v�l och f�r en god utbildning p� Thamas bekostnad, d�r lojaliteten mot kronan betonas mycket h�rt. Men om deras sl�ktingar missk�ter sig sitter gisslans huvud l�st.";
	bakgrundstabeller.damarien[25].intrigerillgarningar=1;
	bakgrundstabeller.damarien[25].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[25].expertispoang=2;
	

	bakgrundstabeller.damarien[26] = {};
	bakgrundstabeller.damarien[26].rubrik="Godsherre";
	bakgrundstabeller.damarien[26].beskrivning="I sm� g�rdar, ensliga slott eller n�gon av Krylomars otaliga storjordbruk regerar godsherrarna, l�gadel som ofta inte �r mer �n en storbonde med vapensk�ld och ett fint namn. En g�ng i tiden var m�nga godsherrar lokala h�rskare som var fruktade och hade egna sm� arm�er, men efter Thamas har de drabbats av obarmh�rtiga utrensningar och m�nga av dem �r numera f�ga mer �n tj�nstem�n som lever i st�ndig fruktan f�r storfurstens str�nga fogdar och r�kenskapsm�n. Dessutom har flera urgamla gods�garfamiljer utpl�nats och ersatts av personer trogna storfursten, m�nga av dem ofr�lse eller utl�nningar.";
	bakgrundstabeller.damarien[26].intrigerillgarningar=1;
	bakgrundstabeller.damarien[26].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[26].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[26].beskrivning="";
	
	
	
	bakgrundstabeller.damarien[27] = {};
	bakgrundstabeller.damarien[27].rubrik="Grovarbetare";
	bakgrundstabeller.damarien[27].beskrivning="Yxor biter in i tr�dstammarna, hackor och hammare frig�r marmor fr�n stenbrotten och murar och byggnader byggs av ren mankraft. Grovarbetarna �r fattiga damarier som lyckats h�lla sig utanf�r livegenskapen, men de betalar ett h�gt pris f�r det i svett och lidande. De �r k�nda f�r kamratskap och envishet. Arbetslagen sliter i b�de regn och gassande sol och sover sedan tungt i kojorna ute i vildmarken. N�r s�songen �r �ver �terv�nder de till sina familjer med pengar eller till st�derna i jakt p� nytt arbete.";
	bakgrundstabeller.damarien[27].valfriatabellslag=1;
	bakgrundstabeller.damarien[27].vildmarksfardigheterenheter=4;
	bakgrundstabeller.damarien[27].hantverkpoang=2;
	
	
	
	bakgrundstabeller.damarien[28] = {};
	bakgrundstabeller.damarien[28].rubrik="Gr�tare";
	bakgrundstabeller.damarien[28].beskrivning="N�r en person d�tt anlitas gr�tare f�r att s�rja den d�de och h�lla onda makter borta fr�n likvakan. �ven n�r fattiga och ok�nda lik ska begravas kallas de ofta in, eftersom d�da som begravs obegr�tna s�gs hems�ka sina begravningsplatser. De kl�r sig i askgr� kl�der, skriker, gr�ter och sl�pper ut sorg och v�nda. De sjunger �ven begravningshymner d�r de, beroende p� den d�des tro, ber Daaks helgon att visa den d�de n�d eller Dibuk att �ppna d�dsrikets portar f�r den bortg�ngne. De vindtroende gr�tarna ber den m�rka �stanvinden att f�ra den d�des sj�l till en god p�nyttf�delse och att snart l�ta den lyckliga V�stanvinden �terv�nda till den d�des hus. Ofta f�rr�ttar de sitt v�rv utanf�r den avlidnes hem eller vandrar utefter stadens gator och skriker den d�des namn.";
	bakgrundstabeller.damarien[28].valfriatabellslag=1;
	bakgrundstabeller.damarien[28].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[28].expertispoang=2;
	bakgrundstabeller.damarien[26].beskrivning="";
	
	bakgrundstabeller.damarien[29] = {};
	bakgrundstabeller.damarien[29].rubrik="Gr�nsvakt";
	bakgrundstabeller.damarien[29].beskrivning="Alltsedan Thamas Vitfj�der krossade sina fiender och er�vrade den damariska kronan har han gjort vad han kunnat f�r att ta kontroll �ver rikets gr�nser. Den paranoide storfursten �r st�ndigt vaksam, mot s�v�l smugglare som de fiender som i exil planerar hans fall och mot utl�ndska kungars spioner. Vid storfurstend�mets gr�nser och hamnar arbetar dessa h�rdf�ra och skarpsynta soldater som systematiskt genoms�ker resen�rers packning och skeppens last. Trots hot om h�rda straff �r n�gra av dem korrupta, men de flesta tror fullt och fast p� sitt uppdrag som storfurstend�mets beskyddare.";
	bakgrundstabeller.damarien[29].striderdrabbningar=1;
	bakgrundstabeller.damarien[29].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[29].stridsfardigheterenheter=4;
	
	
	bakgrundstabeller.damarien[30] = {};
	bakgrundstabeller.damarien[30].rubrik="Gycklare";
	bakgrundstabeller.damarien[30].beskrivning="Enkla n�jen f�r enkla m�nniskor. Gycklare underh�ller det vanliga folket med allehanda konster s�som akrobatik, jonglering, eldbl�sning och eldslukning samt enklare fakirtrick. M�nga gycklare vandrar mellan st�derna f�r att finna nya platser d�r folk �nnu inte sett deras upptr�dande och dessa uppm�rksamma personer f�r med sig skvaller och nyheter fr�n storfurstend�mets alla h�rn.";
	bakgrundstabeller.damarien[30].farderaventyr=1;
	bakgrundstabeller.damarien[30].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[30].kanneteckenpoang=2;
	
	
	bakgrundstabeller.damarien[31] = {};
	bakgrundstabeller.damarien[31].rubrik="Hamnarbetare";
	bakgrundstabeller.damarien[31].beskrivning="N�ra botten av samh�llets pyramid befinner sig hamnarbetarna och de utf�r den grova arbetsinsats som kr�vs f�r att stuva lasten p� fartyg. De syns st�ndigt vandrande i hamnen, b�rande p� tunga s�ckar eller l�rar. De �r r�barkade typer med ytterst lite fritid som de g�rna �gnar �t att dricka p� billiga tavernor, st�ndigt beredda p� slagsm�l. Hamnarbetare vet ofta mycket om vad f�r last olika skepp och lagerbyggnader har i sina m�rka utrymmen och f�r n�gra extra stop �l p� krogen blir de ofta ben�gna att ber�tta mer om lasten �n dess �gare skulle vilja.";
	bakgrundstabeller.damarien[31].striderdrabbningar=1;
	bakgrundstabeller.damarien[31].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[31].expertispoang=2;
	
	bakgrundstabeller.damarien[32] = {};
	bakgrundstabeller.damarien[32].rubrik="Hantverkare";
	bakgrundstabeller.damarien[32].beskrivning="I st�derna lever hantverkarna indelade i olika gillen. De mest inflytelserika hantverkarna �r gillesm�stare vilka anses vara n�gra av stadens m�ktigaste m�n som sitter p� b�de rikligt med pengar och otaliga hantverkshemligheter. De som har l�gst inflytande �r l�rlingar vilka under flera �rs tid f�r arbeta likt slavar �t n�gon av de andra medlemmarna i hopp om att l�ra sig v�rvet.";
	bakgrundstabeller.damarien[32].intrigerillgarningar=1;
	bakgrundstabeller.damarien[32].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[32].hantverkpoang=2;
	
	bakgrundstabeller.damarien[33] = {};
	bakgrundstabeller.damarien[33].rubrik="Hednapr�st";
	bakgrundstabeller.damarien[33].beskrivning="�ven om Daakkyrkan dominerar bland de rika och m�ktiga �r hedendomen och de gamla sederna fortfarande starka i stora delar av furstend�met, d�r de gamla gudarna alltj�mt �r starka. Allt fr�n Jordmodern Leticias munkar och nunnor till havsguden Navares saltpr�ster och de mystiska m�nsystrarna lever och verkar i Damarien f�r att fungera som gudarnas spr�kr�r. Ibland i perfekt harmoni med Daaks pr�ster och de fem vindarnas munkar, och ibland l�sta i d�dlig, of�rl�tande konflikt.";
	bakgrundstabeller.damarien[33].kunskapmysterier=1;
	bakgrundstabeller.damarien[33].mystikfardigheterenheter=4;
	bakgrundstabeller.damarien[33].kanneteckenpoang=2;
	
	bakgrundstabeller.damarien[34] = {};
	bakgrundstabeller.damarien[34].rubrik="Henrudit";
	bakgrundstabeller.damarien[34].beskrivning="Den heliga Henrudas orden �r Damariens �ldsta Daaktrogna klosterorden och f�ljer sitt helgons exempel genom att med ord och l�rdom �ra Daak och Milargok F�rkunnaren. Systrarna, som ofta �r �nkor fr�n adeln eller rika borgarfamiljer, �r en stor maktfaktor inom den damariska kyrkan och kontrollerar �ven de damariska kloster- och katedralskolorna d�r de rikas och m�ktigas barn utbildas. Henruditerna har d�rf�r ofta stor makt och insyn i b�de adelns och kyrkans g�rom�l och d� orden ut�ver detta �ger stora lantegendomar kan de normalt sett fredliga nunnorna vara mycket farliga fiender.";
	bakgrundstabeller.damarien[34].kunskapmysterier=1;
	bakgrundstabeller.damarien[34].mystikfardigheterenheter=4;
	bakgrundstabeller.damarien[34].kunskapsfardigheterenheter=4;
	
	bakgrundstabeller.damarien[35] = {};
	bakgrundstabeller.damarien[35].rubrik="Herde";
	bakgrundstabeller.damarien[35].beskrivning="P� de damariska sl�tterna, floddalarna och bergssluttningarna vandrar stora skockar av f�r, svin och n�tkreatur f�r att beta och �ta upp sig inf�r vintern. Dessa djur �vervakas och vallas av herdar, kvinnor och m�n som ibland tillbringar l�nga veckor i ensamhet l�ngt borta fr�n hemmets h�rd, ofta utan annat s�llskap �n sina carzimska v�ktarhundar. Herdarnas arbete �r inte bara sv�rt, fattigt och ensamt, det kan �ven vara mycket farligt. Dels m�ste herden kunna vakta sina flockar mot r�vare, boskapstjuvar och rovdjur. Dels kan m�nga av dem �ven ber�tta gastkramande historier om de monster och skuggv�sen som ensamma vallare ibland kunnat ana utanf�r l�gereldens sken.";
	bakgrundstabeller.damarien[35].farderaventyr=1;
	bakgrundstabeller.damarien[35].vildmarksfardigheterenheter=4;
	bakgrundstabeller.damarien[35].hantverkpoang=2;
	
	bakgrundstabeller.damarien[36] = {};
	bakgrundstabeller.damarien[36].rubrik="Ikonm�lare";
	bakgrundstabeller.damarien[36].beskrivning="Ikonm�larna �r h�gt respekterade hantverkare som l�rt sig den sv�ra och tidskr�vande konsten att med pensel f�nga en liten del av Daaks h�rlighet p� tr� och m�larduk. M�nga ikonm�lare h�ller h�rt p� yrkets hemligheter och det s�gs att flera av de st�rsta m�starna endast m�lar efter att under timmar av intensiva b�ner och sj�lvsp�kning ha n�tt direktkontakt med Daaks osynliga rike. N�stan alla Daaktrogna damarier har minst en helig bild i sitt hem mot vilka de riktar sina b�ner och rikets Daakkyrkor har ofta otaliga, rikt dekorerade bilder av Daak, helgonen och profeterna. Ikonm�larna �r n�stan alltid munkar och nunnor, och d� ikonf�rs�ljning �r en stor inkomstk�lla f�r klostren �r det inte ovanligt att dessa girigt f�rs�ker g�ra sig av med konkurrenter.";
	bakgrundstabeller.damarien[36].intrigerillgarningar=1;
	bakgrundstabeller.damarien[36].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[36].hantverkpoang=2;
	
	bakgrundstabeller.damarien[37] = {};
	bakgrundstabeller.damarien[37].rubrik="Indrivare";
	bakgrundstabeller.damarien[37].beskrivning="Aggression, hotfullhet och ett respektingivande yttre �r meriter hos indrivare i de l�gre samh�llsklasserna. Bland de mer f�rm�gna �r det v�ltalighet kryddad med dolda hot, skicklig dokumentation och en insikt i l�ntagarens tillg�ngar det som fungerar b�st. Deras roll �r dock densamma � att utl�nade pengar kommer tillbaka till sin �gare. Om detta l�ses med att fingrar bryts och t�nder sl�s ut eller att aff�rer saboteras, familjer hotas och egendom br�nns ned beror helt och h�llet p� situationen och summans storlek.";
	bakgrundstabeller.damarien[37].striderdrabbningar=1;
	bakgrundstabeller.damarien[37].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[37].stridsfardigheterenheter=4;
	
	bakgrundstabeller.damarien[38] = {};
	bakgrundstabeller.damarien[38].rubrik="Jordbrukare";
	bakgrundstabeller.damarien[38].beskrivning="Storfurstend�met h�lls vid liv av de som sliter med att odla dess magra jordar. Dessa s�r f�lten, vallar boskapen och frambringar den stora m�ngd spannm�l och k�tt som fraktas till st�derna p� oxdragna vagnar. Under sv�lt�r �r livet p� landet mycket h�rt men n�r sk�rden �r god lever m�nga gott och de som �r lite mer bemedlade kan hyra in arbetare som dagl�nare eller har backstugusittare som utf�r en del av arbetet.";
	bakgrundstabeller.damarien[38].farderaventyr=1;
	bakgrundstabeller.damarien[38].vildmarksfardigheterenheter=4;
	bakgrundstabeller.damarien[38].hantverkpoang=2;
	
	bakgrundstabeller.damarien[39] = {};
	bakgrundstabeller.damarien[39].rubrik="Jordesoldatens vittne";
	bakgrundstabeller.damarien[39].bestamd="vittnet";
	bakgrundstabeller.damarien[39].obestamd="ett Jordesoldatens vittne";
	bakgrundstabeller.damarien[39].pluralobestamd="Jordesoldatens vittnen";
	bakgrundstabeller.damarien[39].pluralbestamd="vittnena";
	bakgrundstabeller.damarien[39].beskrivning="Jordesoldatens vittnen �r ett religi�st samfund som f�ljer profeten Jordesoldatens l�ror om tapperhet, �rlighet, syskonskap och h�rt arbete. Eftersom ordens medlemmar f�rkastar Daakkyrkans strikta hierarki har den f�rklarats k�ttersk av den jargiska moderkyrkan och r�relsens medlemmar, som inte till�ts ljuga om sin tro, jagas aktivt av inkvisitionen. I Damarien har r�relsen funnit en fristad och blivit popul�r bland hantverkare, soldater och andra Daaktroende som ser kyrkan som dekadent och korrupt.";
	bakgrundstabeller.damarien[39].farderaventyr=1;
	bakgrundstabeller.damarien[39].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[39].hantverkpoang=2;
	
	bakgrundstabeller.damarien[40] = {};
	bakgrundstabeller.damarien[40].rubrik="J�gare";
	bakgrundstabeller.damarien[40].beskrivning="I den damariska vildmarken lever dessa simpla m�nniskor p� sin skicklighet med spjut, b�ge och f�llor. D� och d� reser de tillbaka till st�derna eller byarna med hudar, k�tt eller hantverk i horn och ben. Vissa j�gare arbetar ensamma men andra v�ljer att ansluta sig till jaktlag som tillsammans driver och f�ller bytet.";
	bakgrundstabeller.damarien[40].farderaventyr=1;
	bakgrundstabeller.damarien[40].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[40].vildmarksfardigheterenheter=4;
	
	bakgrundstabeller.damarien[41] = {};
	bakgrundstabeller.damarien[41].rubrik="Kadarier";
	bakgrundstabeller.damarien[41].beskrivning="Kadarierna �r en m�rklig och legendarisk yrkesk�r, som lever l�nga perioder ute i vildmarken f�r att �vervaka de halvtama h�st- och boskapsflockar som betar p� de damariska sl�tterna och dalg�ngarna. Kadarierna �r �ven hedniska pr�ster som ursprungligen f�tt sitt namn fr�n h�starnas och fruktbarhetens gud Kadar. �ven om m�nga kadarier i verkligheten lever h�rda, slitsamma och farliga liv har de l�ngh�riga pr�sterna romantiserats enormt i den damariska kulturen, d�r de i otaliga s�nger och sagor framst�lls som tappra frihetsk�mpar, underbara s�ngare och fantastiska �lskare.";
	bakgrundstabeller.damarien[41].farderaventyr=1;
	bakgrundstabeller.damarien[41].vildmarksfardigheterenheter=4;
	bakgrundstabeller.damarien[41].hantverkpoang=2;
	
	bakgrundstabeller.damarien[42] = {};
	bakgrundstabeller.damarien[42].rubrik="Kartograf";
	bakgrundstabeller.damarien[42].beskrivning="Sedan Thamas er�vring av Damariens tron har �tskilliga kartografer kallats till riket f�r att f� ordning p� dess otaliga sm� byar, gods, skogar och dalar. Dessutom skickas m�nga kartografer i hemlighet till grannl�nder som V�stmark och Soldarn f�r att med stor fara f�r sitt eget liv kartl�gga rikenas v�gar och terr�ng och deras duglighet f�r trupptransporter. Detta �r sysslor som st�ller h�ga krav p� s�v�l hantverksskicklighet som matematisk noggrannhet och fysisk uth�llighet.";
	bakgrundstabeller.damarien[42].farderaventyr=1;
	bakgrundstabeller.damarien[42].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[42].hantverkpoang=2;
	
	bakgrundstabeller.damarien[43] = {};
	bakgrundstabeller.damarien[43].rubrik="Konfiskat�r";
	bakgrundstabeller.damarien[43].beskrivning="�godelar, varor och pengar p� villov�gar ska naturligtvis beslagtas och �terb�rdas till sin r�ttm�tiga �gare. Oftast r�r det sig om n�gon form av egendom som stulits, f�rskingrats eller �verl�tits till en ny �gare. En konfiskat�r st�djer sig p� en konfiskationsorder som utf�rdats av n�gon av storfurstens tj�nstem�n och f�r normalt provision i efterhand � allt fr�n en tiondel till h�lften av godsets v�rde.";
	bakgrundstabeller.damarien[43].intrigerillgarningar=1;
	bakgrundstabeller.damarien[43].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[43].socialafardigheterenheter=4;
	
	bakgrundstabeller.damarien[44] = {};
	bakgrundstabeller.damarien[44].rubrik="Kristallvigd";
	bakgrundstabeller.damarien[44].bestamd="den kristallvigde";
	bakgrundstabeller.damarien[44].pluralobestamd="kristallvigda";
	bakgrundstabeller.damarien[44].pluralbestamd="de kristallvigda";
	bakgrundstabeller.damarien[44].beskrivning="Kristallorden �r ett urgammalt och inflytelserik hedniskt s�llskap vars medlemmar ser det som sin plikt att f�rsvara de gamla gudarnas anh�ngare i Damarien mot verkliga och inbillade hot. Orden �r k�nd f�r sina �rliga korst�g mot vindmunkarna, men f�rf�ljer �ven fedaker och Daaks mission�rer. De flesta kristallvigda �r enkelt folk med vanliga arbeten som �ppet eller i hemlighet underkastar sig en hednapr�st och ing�r i ett av de s�llskap som kallas fratages.";
	bakgrundstabeller.damarien[44].striderdrabbningar=1;
	bakgrundstabeller.damarien[44].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[44].kanneteckenpoang=2;

	bakgrundstabeller.damarien[45] = {};
	bakgrundstabeller.damarien[45].rubrik="Kunskapare";
	bakgrundstabeller.damarien[45].beskrivning="I tj�nst �t n�gon uppsatt, vanligen n�gon inom kyrkan, n�gon av adels�tterna, ett handelshus eller kanske till och med ett fr�mmande rike spionerar kunskaparen p� sina m�l och s�nder tillbaka detaljerade rapporter om vad som p�g�r. En del kunskapare �r inte mer �n tj�nare som f�r n�gra extra guld genom att ber�tta vad dennes herrar har f�r sig medan andra kunskapare har tr�nats i sitt v�rv sedan barnsben.";
	bakgrundstabeller.damarien[45].intrigerillgarningar=1;
	bakgrundstabeller.damarien[45].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[45].socialafardigheterenheter=4;
	
	
	bakgrundstabeller.damarien[46] = {};
	bakgrundstabeller.damarien[46].rubrik="Kurirryttare";
	bakgrundstabeller.damarien[46].beskrivning="Nyheter f�rdas l�ngsamt i ett land som Damarien, d�r v�gar ofta �r illa underh�llna och resen�rer riskerar att angripas av fredl�sa och monster. N�r bud m�ste skickas med hast eller nyheter m�ste spridas till rikets alla inv�nare s�nds kurirryttare mellan st�derna. De spikar upp plakat, levererar sigillf�rseglade brev och viskar kodade budskap till utvalda personer. S� gott som alla stora sl�kter har egna kurirryttare, likas� kyrkan, Kristallorden och vindmunkarnas kloster.";
	bakgrundstabeller.damarien[46].farderaventyr=1;
	bakgrundstabeller.damarien[46].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[46].vildmarksfardigheterenheter=4;
	
	bakgrundstabeller.damarien[47] = {};
	bakgrundstabeller.damarien[47].rubrik="Kv�dare";
	bakgrundstabeller.damarien[47].beskrivning="Fr�n de st�rsta borgarna till den enklaste tr�lstuga sjunger och ber�ttar damarierna s�nger, sagor och poesi. En skicklig sagober�ttare �r ett m�ste f�r varje respektabel st�ndsperson och en skicklig kv�dare med gott minne och vacker r�st kan ofta leva v�l p� att vandra mellan byar och herres�ten. Men det �r l�ngt ifr�n ett farofritt v�rv, en missn�jd publik eller en adelsman som tror att n�gon av sagorna driver med honom kan leda till allt fr�n bombardering med rutten frukt till ett fall fr�n slottsmurarna.";
	bakgrundstabeller.damarien[47].farderaventyr=1;
	bakgrundstabeller.damarien[47].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[47].kanneteckenpoang=2;
	
	bakgrundstabeller.damarien[48] = {};
	bakgrundstabeller.damarien[48].rubrik="K�pman";
	bakgrundstabeller.damarien[48].beskrivning="K�pmannen s�ljer, byter och k�per varor och f�rs�ker pressa fram s� stor vinst som det bara �r m�jligt. Dj�rva chanstagningar, f�rsenade leveranser eller m�rdande konkurrens kan helt sl� ut en k�pman. Damariens hamnar �r en lockande men farlig marknad f�r m�nga k�pm�n, ty d�r kan storfurstens pl�tsliga infall eller plundrande pirater n�r som helst f�rvandla lycka till underg�ng.";
	bakgrundstabeller.damarien[48].intrigerillgarningar=1;
	bakgrundstabeller.damarien[48].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[48].socialafardigheterenheter=4;
	
	bakgrundstabeller.damarien[49] = {};
	bakgrundstabeller.damarien[49].rubrik="Lamiakultist";
	bakgrundstabeller.damarien[49].beskrivning="Damarien �r ett rike som allt sedan sin f�delse legat under de vand�das skugga och otaliga �r sagorna om de bleka vampyrer som s�gs stryka runt nattetid och t�mma m�nniskor p� blod. De �r v�sen som f�rkastat Daak men genom m�rk magi vunnit sk�nhet, ofantlig styrka och evigt liv. Runt om i storfurstend�met existerar alltj�mt kulter som dyrkar dessa varelser i svarta m�ssor och blodsriter i hopp om att f� del av deras makt och kanske slutligen vinna od�dlighetens g�va.";
	bakgrundstabeller.damarien[49].kunskapmysterier=1;
	bakgrundstabeller.damarien[49].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[49].expertispoang=2;
	
	bakgrundstabeller.damarien[50] = {};
	bakgrundstabeller.damarien[50].rubrik="Legosoldat";
	bakgrundstabeller.damarien[50].beskrivning="De krigare som inte ansluter sig till storfurstens arm� blir ofta legosoldater. Vissa �r f�re detta soldater som valt att g� sin egen v�g medan andra v�rvas direkt som unga m�n f�r att sl�ss i ett f�rband. Legosoldater reser land och rike runt f�r att sl�ss f�r dem som betalar b�st.";
	bakgrundstabeller.damarien[50].striderdrabbningar=1;
	bakgrundstabeller.damarien[50].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[50].vildmarksfardigheterenheter=4;
	
	
	bakgrundstabeller.damarien[51] = {};
	bakgrundstabeller.damarien[51].rubrik="Livegen";
	bakgrundstabeller.damarien[51].bestamd="den livegne"
	bakgrundstabeller.damarien[51].pluralobestamd="livegna"
	bakgrundstabeller.damarien[51].pluralbestamd="de livegna"
	bakgrundstabeller.damarien[51].beskrivning="De allra flesta av Damariens folk �r livegna b�nder som sliter h�rt p� n�gon furstes mark och som ses som f�ga mer �n boskap av sina herrar. �ven om en livegen inte kan s�ljas som en slav �r de f�rbjudna att l�mna sin jord utan sin herres till�telse och m�nga av dem lever korta och h�rda liv d�r de aldrig ser mer �n sin egen hemby. M�nga livegna har levt hela sina liv p� detta s�tt, men andra tvingas in i detta tillst�nd p� grund av obetalda skulder eller fattigdom. Under Thamas har lagarna som reglerar de livegna sk�rpts, men m�nga av dem st�djer �nd� storfursten som anses ha gjort slut p� krigen och m�nga av de v�rsta �vergreppen fr�n giriga sm�furstar.";
	bakgrundstabeller.damarien[51].farderaventyr=1;
	bakgrundstabeller.damarien[51].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[51].valfriaenheter=4;
	
	bakgrundstabeller.damarien[52] = {};
	bakgrundstabeller.damarien[52].rubrik="Livvakt";
	bakgrundstabeller.damarien[52].beskrivning="D�dens skugga vilar st�ndigt �ver Damariens rika och m�ktiga och de som har r�d h�ller sig d�rf�r n�stan alltid med livvakter av n�got slag. Livvakterna kan komma fr�n m�nga olika bakgrunder, ibland stammar de fr�n familjer som sedan generationer tillbaka visat sin lojalitet mot sina h�rskare, men ibland r�r det sig om tillf�lligt anst�llda �ventyrare eller legoknektar. En god livvakt f�rv�ntas om s� �r n�dv�ndigt d� f�r sin arbetsgivare, men till st�rsta delen best�r deras arbete av att f�rs�ka planera sin herres vardag p� ett s�dant s�tt att s�dana offer blir on�diga.";
	bakgrundstabeller.damarien[52].striderdrabbningar=1;
	bakgrundstabeller.damarien[52].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[52].valfriaenheter=4;
	
	bakgrundstabeller.damarien[53] = {};
	bakgrundstabeller.damarien[53].rubrik="M�nsyster";
	bakgrundstabeller.damarien[53].pluralobestamd="m�nsystrar";
	bakgrundstabeller.damarien[53].beskrivning="Under m�rka n�tter d� landet badar i m�nens bleka sken samlas m�nsystrarna, grupper av hedningar som tillber de kvinnliga makterna genom extatiska danser och mystiska riter. M�nga av dem s�gs ha sk�dat b�de andev�rlden och Skugglandet och de s�gs ha givits maken att b�de v�lsigna och f�rbanna v�nner och fiender. M�nga damarier v�nder sig �ven till de �rtkunniga mystikerna f�r att bota de sjuka, men �ven f�r giftdekokter, k�rleksbrygder och fosterf�rdrivning.";
	bakgrundstabeller.damarien[53].kunskapmysterier=1;
	bakgrundstabeller.damarien[53].kunskapsfardigheter=4;
	bakgrundstabeller.damarien[53].rorelsefardigheterenheter=4;
	
	
	bakgrundstabeller.damarien[54] = {};
	bakgrundstabeller.damarien[54].rubrik="Lurendrejare";
	bakgrundstabeller.damarien[54].beskrivning="Lurendrejaren tj�nar sitt dagliga br�d genom att bedra sina medm�nniskor och har med tiden utvecklat taskspel och bluffmakeri till en konstform oavsett om det r�r sig om en charm�r som sol-och-v�rar ensamma �dlingar deras pengar eller en h�nsynsl�s kvacksalvare som lurar av desperata sjuklingar deras sista slantar i utbyte mot verkningsl�sa kurer. Denna karri�r kr�ver ett slipat munl�der och en f�rm�ga att snabbt f�rsvinna och ligga l�gt tills n�sta m�jlighet �ppnar sig om n�gon b�rjar st�lla obekv�ma fr�gor.";
	bakgrundstabeller.damarien[54].intrigerillgarningar=1;
	bakgrundstabeller.damarien[54].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[54].expertispoang=2;
	
	bakgrundstabeller.damarien[55] = {};
	bakgrundstabeller.damarien[55].rubrik="L�nnm�rdare";
	bakgrundstabeller.damarien[55].beskrivning="I Damarien �r det inte ovanligt att o�nskade personer undanr�js genom l�nnmord. Det kan r�ra sig om allt fr�n brutala knivsk�rare i hamnkvarteren till subtila giftm�rdare vid hovet. Vissa l�nnm�rdare arbetar �t storfursten, andra �t n�gon av de m�ktigaste sl�kterna eller handelshusen. Dibuks barn har en grupp som kallas Dibuks fingrar medan vindmunkarna har l�nnm�rdare i sitt s�llskap �stanvindens skuggor. De professionella m�rdarna fungerar �ven som livvakter, r�dgivare och som skydd mot andra l�nnm�rdare.";
	bakgrundstabeller.damarien[55].intrigerillgarningar=1;
	bakgrundstabeller.damarien[55].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[55].stridsfardigheterenheter=4;
	
	bakgrundstabeller.damarien[56] = {};
	bakgrundstabeller.damarien[56].rubrik="Medikus";
	bakgrundstabeller.damarien[56].pluralobestamd="medikusar";
	bakgrundstabeller.damarien[56].beskrivning="";
	bakgrundstabeller.damarien[56].kunskapmysterier=1;
	bakgrundstabeller.damarien[56].kunskapsfardigheter=4;
	bakgrundstabeller.damarien[56].vildmarksfardigheterenheter=4;
	
	bakgrundstabeller.damarien[57] = {};
	bakgrundstabeller.damarien[57].rubrik="Munsk�nk";
	bakgrundstabeller.damarien[57].rubrik="munsk�nkar";
	bakgrundstabeller.damarien[57].beskrivning="Ju h�gre status en damarier kunnat k�mpa sig till desto fler fiender f�r hon och f�rgiftning �r en d�dsorsak som �r allt f�r vanlig hos de rika. Munsk�nkar �r personer med mycket k�nsliga smakl�kar som tr�nats i att uppt�cka gifter i mat och dryck. Genom att �ta en stund innan sin herre kan de utveckla f�rgiftningssymptom innan herren ens smakar maten. Dessa personer befinner sig mitt bland de h�gre st�nden och har en inblick i m�nga av de g�rom�l som sker d�r.";
	bakgrundstabeller.damarien[57].intrigerillgarningar=1;
	bakgrundstabeller.damarien[57].vildmarksfardigheterenheter=4;
	bakgrundstabeller.damarien[57].expertispoang=2;
	
	bakgrundstabeller.damarien[58] = {};
	bakgrundstabeller.damarien[58].rubrik="M�sterinformat�r";
	bakgrundstabeller.damarien[58].beskrivning="Ett av storfurstens mest fruktade maktinstrument �r de kunskapare, angivare och spioner som �r organiserade i samfundet \"Kronans m�sterinformat�rer\", i folkmun kallat \"Nattmarorna\". �ven om underr�ttelsetj�nsten inte �r stor �r dess ledare m�stare p� psykologisk krigf�ring och det s�gs att de ibland anv�nder sig av magiska hj�lpmedel f�r att spionera p� och m�rda sina motst�ndare. De flesta av dess medlemmar �r l�ga agenter som endast ska rapportera rykten de h�r upp�t i hierarkin, medan andra �r professionella l�nnm�rdare eller torterare, n�gra av dem besitter till och med magiska och ockulta kunskaper.";
	bakgrundstabeller.damarien[58].intrigerillgarningar=1;
	bakgrundstabeller.damarien[58].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[58].socialafardigheterenheter=4;
	
	59 
	
	1 slag p� Intriger & illg�rningar, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.

	bakgrundstabeller.damarien[59] = {};
	bakgrundstabeller.damarien[59].rubrik="Nattgardist";
	bakgrundstabeller.damarien[59].beskrivning="Vad som b�rjade som Thamas personliga livvakt utvecklades snart till storfurstens obarmh�rtiga, hatade och fruktade elitstyrka, ob�ndigt lojala till storfursten och drottningen och som med en blandning av v�ld, skr�ck och stenh�rd disciplin s�krat kronan p� Thamas huvud. Nattgardisterna har alla personligen valts ut av storfursten, f�tt riddarslaget av honom och har i folkmun kommit att f� �knamnet \"M�rkerhundarna\". Orden �r k�nd f�r sin f�rk�rlek f�r att sl� till mot storfurstens fiender om natten och medlemskap i s�llskapet �r en utm�rkt v�g till makt och inflytande vid hovet i Targus.";
	bakgrundstabeller.damarien[59].intrigerillgarningar=1;
	bakgrundstabeller.damarien[59].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[59].vildmarksfardigheterenheter=4;
	
	60 
	
	1 slag p� Intriger & illg�rningar, 4 enheter Sociala f�rdigheter, 4 valfria enheter.

	bakgrundstabeller.damarien[60] = {};
	bakgrundstabeller.damarien[60].rubrik="Ockrare";
	bakgrundstabeller.damarien[60].beskrivning="Guld och silver fl�dar genom storfurstend�mets st�der och de som inga pengar har kan inte komma l�ngt. Ockrarna �r personer som har en egen f�rm�genhet och som g�rna l�nar ut en summa mot en riklig r�nta. Det finns alltid de som vill g�ra aff�rer, beh�ver en medikus eller m�ste betala av en skuld. Om inte pengarna kommer tillbaka i tid tvingas ockraren ta hj�lp av indrivare f�r att skydda sin investering.";
	bakgrundstabeller.damarien[60].intrigerillgarningar=1;
	bakgrundstabeller.damarien[60].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[60].valfriaenheter=4;
	
	61 
	
	1 slag p� F�rder & �ventyr, 4 enheter Kunskapsf�rdigheter, 4 enheter Vildmarksf�rdigheter.

	bakgrundstabeller.damarien[61] = {};
	bakgrundstabeller.damarien[61].rubrik="Pilgrim";
	bakgrundstabeller.damarien[61].beskrivning="Allt fr�n de enklaste b�nder till de m�ktigaste adelsm�n ger sig ibland ut p� pilgrimsresor, obev�pnade och i enkla kl�der, f�r att f� f�rl�telse f�r sina synder, gudarnas v�lsignelse eller f�r att vinna insikt i de gudomliga mysterierna. De Daaktroende vandrar ibland till katedralerna i Targus eller Hammarn�set eller hela den l�nga, farliga v�gen till Tibara i kejsard�met via Skymningsv�gen. N�stan alla vindtroende f�rs�ker minst en g�ng i livet bege sig till Det vita klostret och m�nga hedningar vandrar till de heliga platserna i Tallveden, Kristalltemplet eller n�got av Jordmoderns kloster.";
	bakgrundstabeller.damarien[61].farderaventyr=1;
	bakgrundstabeller.damarien[61].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[61].vildmarksfardigheterenheter=4;
	
	62 
	
	1 slag p� Strider & drabbningar, 4 enheter Stridsf�rdigheter, 2 po�ng K�nnetecken.

	bakgrundstabeller.damarien[62] = {};
	bakgrundstabeller.damarien[62].rubrik="Pirat";
	bakgrundstabeller.damarien[62].beskrivning="Fr�n Pirat�arna i s�der till Mirrons m�rka bakgator eller Purpurhavets otaliga �ar h�rjar lagl�sa pirater och sj�r�vare. Dessa brutala m�n och kvinnor lever p� att plundra skepp och ibland �ven kustbos�ttningar. De flesta pirater lever i sm� bes�ttningar eller i (t�tt sammansvetsade) klaner om de �r tiraker, men p� senare �r har de religi�sa fanatikerna i bandet Okurerna v�xt sig allt st�rre. Vissa piratkaptener har lyckats f� officiella kaparbrev av n�gon makthavare och kan d� med deras v�lsignelse attackera skepp fr�n fiendenationer.";
	bakgrundstabeller.damarien[62].striderdrabbningar=1;
	bakgrundstabeller.damarien[62].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[62].kanneteckenpoang=2;
	
	63 
	
	1 slag p� Strider & drabbningar, 4 enheter R�relsef�rdigheter, 4 enheter Stridsf�rdigheter.

	bakgrundstabeller.damarien[63] = {};
	bakgrundstabeller.damarien[63].rubrik="Prisj�gare";
	bakgrundstabeller.damarien[63].beskrivning="N�gra anv�nder sina kontakter och sitt skarpsinne, andra en s�llan sk�dad v�ldsamhet, men i slut�ndan �r prisj�garens enda m�l att f�nga in misst�nkta brottslingar och upprorsm�n och f�ra dem inf�r storfurstens domare f�r att d�mas. Arresteringsorder spikas upp p� v�ggar vid stadsportar eller l�ses upp av utropare och ju farligare byte och gr�vre brott desto mer silver kan de inbringa.";
	bakgrundstabeller.damarien[63].striderdrabbningar=1;
	bakgrundstabeller.damarien[63].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[63].stridsfardigheterenheter=4;
	
	64 
	
	1 slag p� Strider & drabbningar, 4 enheter R�relsef�rdigheter, 4 enheter Stridsf�rdigheter.

	bakgrundstabeller.damarien[64] = {};
	bakgrundstabeller.damarien[64].rubrik="Protektor";
	bakgrundstabeller.damarien[64].beskrivning="Det finns m�nga v�rdefulla saker som beh�ver skyddas; personer, egendomar och f�rem�l. En protektor har till uppgift att mot betalning vaka �ver dessa och ta till vapen om s� skulle kr�vas. En del agerar som livvakter till bortsk�mda �dlingar, andra b�r och skyddar familjens sigillst�mplar och vissa �r anst�llda av handelshus f�r att se till att lasten kommer fram or�rd.";
	bakgrundstabeller.damarien[64].striderdrabbningar=1;
	bakgrundstabeller.damarien[64].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[64].stridsfardigheterenheter=4;
	
	65 
	
	1 slag p� valfri tabell, 4 enheter Sociala f�rdigheter, 4 valfria enheter.

	bakgrundstabeller.damarien[65] = {};
	bakgrundstabeller.damarien[65].rubrik="Samarit";
	bakgrundstabeller.damarien[65].beskrivning="Storfurstend�met �r en obarmh�rtig plats och den som inte kan h�lla sig p� f�tter trampas ned. Gamla personer d�r ensamma i sina stugor, sjuka dukar under i feberfrossor och sp�dbarn skriker av hunger. Det finns dock de som svurit sina liv �t att bist� sjuka, lytta och modf�llda �ven om de inte kan betala f�r sig. Dessa barmh�rtiga m�nniskor finner man bland alla samh�llsklasser, till och med p� de mest ov�ntade st�llen.";
	bakgrundstabeller.damarien[65].valfriatabellslag=1;
	bakgrundstabeller.damarien[65].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[65].valfriaenheter=4;
	
	66 
	
	1 slag p� Kunskap & mysterier, 4 enheter R�relsef�rdigheter, 4 enheter Stridsf�rdigheter.

	bakgrundstabeller.damarien[66] = {};
	bakgrundstabeller.damarien[66].rubrik="Sebaelit";
	bakgrundstabeller.damarien[66].beskrivning="Krigarmunkarna i S:t Sebaels orden har vigt sina liv �t att skydda det damariska folket mot monster, svartkonstn�rer och k�ttare. �ven om orden �r en blek skugga av den jargiska inkvisitionen �r Sebaeliterna fruktade och respekterade av m�nga damarier och br�derna har ofta kommit att samarbeta med hedningar och trollkarlarna i Santimarexorden f�r att besegra �nnu v�rre hot mot m�nniskornas sj�lar.";
	bakgrundstabeller.damarien[66].kunskapmysterier=1;
	bakgrundstabeller.damarien[66].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[66].stridsfardigheterenheter=4;
	
	67 
	
	1 slag p� F�rder & �ventyr, 4 enheter R�relsef�rdigheter, 4 enheter Vildmarksf�rdigheter.

	bakgrundstabeller.damarien[67] = {};
	bakgrundstabeller.damarien[67].rubrik="Sj�farare";
	bakgrundstabeller.damarien[67].beskrivning="Saltet, brisen, m�sarnas skratt och str�mmarnas nyckfullhet. Ingenting g�r upp mot att m�ta soluppg�ngen p� ett majest�tiskt fartyg, h�gt uppe i riggen med en bit skeppsskorpa i ena handen och en flaska rom i den andra. Sj�fararna reser vida kring i sina gungande borgar. Det �r dock ett farligt v�rv; p� m�rka vatten hopas stormar och orkaner som kan slita de st�rsta skeppen i stycken. Djupt under ytan ligger monster och sj�odjur vilande i v�ntan p� att ett l�mpligt m�l med mat ska r�ka segla f�rbi.";
	bakgrundstabeller.damarien[67].farderaventyr=1;
	bakgrundstabeller.damarien[67].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[67].vildmarksfardigheterenheter=4;
	
	bakgrundstabeller.damarien[68] = {};
	bakgrundstabeller.damarien[68].rubrik="Skarpr�ttare";
	bakgrundstabeller.damarien[68].beskrivning="De damariska skarpr�ttarna �r b�de fruktade, avskydda och respekterade. Medan b�dlarna i m�nga andra riken utg�rs av ben�dade f�ngar eller kriminella s� �r de damariska m�sterm�nnen h�gt tr�nade och v�lbetalda hantverkare, vars titel ofta g�r i arv fr�n far till son. Detta beror bland annat p� att avr�ttningar inom det drakoniska damariska r�ttssystemet ofta �r b�de hantverksm�ssigt och tekniskt avancerade historier som kr�ver god hand med verktyg och kunskap om den m�nskliga kroppen. Likv�l g�r de flesta damarier ur v�gen n�r de ser den svartkl�dde m�stermannen komma g�ende p� stadens gator tillsammans med sina rackare.";
	bakgrundstabeller.damarien[68].striderdrabbningar=1;
	bakgrundstabeller.damarien[68].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[68].hantverkpoang=2;
	
	69 
	
	1 slag p� F�rder & �ventyr, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.

	bakgrundstabeller.damarien[69] = {};
	bakgrundstabeller.damarien[69].rubrik="Skogvaktare";
	bakgrundstabeller.damarien[69].beskrivning="I djupet av de m�rka damariska skogarna vandrar skogvaktarna, m�n och kvinnor som arbetar f�r adeln och storfursten med att stoppa tjuvj�gare och vedtjuvar. Skogvaktarens yrke kan vara ytterst riskabelt, d� v�ldsamma konfrontationer med str�tr�vare, fredl�sa, monster och alver �r en del av vardagen. M�nga skogvaktare �r h�rdade krigare med stor vildmarksvana och respekt f�r de fasor och hemligheter som g�mmer sig i skogarnas djup.";
	bakgrundstabeller.damarien[69].farderaventyr=1;
	bakgrundstabeller.damarien[69].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[69].vildmarksfardigheterenheter=4;
	
	70 
	
	1 slag p� Intriger & illg�rningar, 4 enheter Kunskapsf�rdigheter, 2 Spr�kenheter.

	bakgrundstabeller.damarien[70] = {};
	bakgrundstabeller.damarien[70].rubrik="Skrivare";
	bakgrundstabeller.damarien[70].beskrivning="Med bl�ckst�nk p� sina fingrar, en fj�derpenna i sitt grepp och b�jd rygg fyller de ark efter ark med text. Skrivare finns �verallt i storfurstend�met. M�nga arbetar som tj�nstem�n i byr�kratin, andra skapar vackra kopior av k�nda b�cker eller skriver ned order fr�n milit�rer, handelsfurstar eller adelsm�n. D� de skriver av och kopierar m�nga texter och b�cker besitter de ofta en bred kunskap om m�nga olika �mnen och vissa har en insikt i aff�rer som inte b�r bli allm�nt k�nda.";
	bakgrundstabeller.damarien[70].intrigerillgarningar=1;
	bakgrundstabeller.damarien[70].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[70].sprakenheter=2;
	
	71 
	
	1 slag p� Intriger & illg�rningar, 4 valfria enheter, 2 po�ng Hantverk.

	bakgrundstabeller.damarien[71] = {};
	bakgrundstabeller.damarien[71].rubrik="Skulpt�r";
	bakgrundstabeller.damarien[71].beskrivning="De finns de som vigt sina liv �t att forma stenen och skapa vackra och imponerande konstverk. Dv�rgar har en fallenhet f�r denna konstform och Helm var innan stadens f�rd�rv k�nd �ver stora delar av Mundana f�r sina skickliga stenhuggare. Vissa konstverk �r s� sk�na eller skr�ckinjagande att deras blotta existens gett upphov till rykten om vissa skulpt�rers makt att till och med ge sina skapelser liv.";
	bakgrundstabeller.damarien[71].intrigerillgarningar=1;
	bakgrundstabeller.damarien[71].valfriaenheter=4;
	bakgrundstabeller.damarien[71].hantverkpoang=2;
	
	72 
	
	1 slag p� Intriger & illg�rningar, 4 enheter R�relsef�rdigheter, 2 po�ng Expertiser.

	bakgrundstabeller.damarien[72] = {};
	bakgrundstabeller.damarien[72].rubrik="Sk�ka";
	bakgrundstabeller.damarien[72].beskrivning="Lust, passion och frestelse f�rd�ms av kyrkan och de som mot betalning utf�r dessa tj�nster �r bespottade av s� gott som alla. Men lidelsen och lusten genomsyrar hela storfurstend�met och tvingar m�n och kvinnor som saknar andra medel att s�lja sina kroppar f�r att klara dagen. Det �r ett farligt v�rv d�r man riskerar att drabbas av sjukdomar, v�ldsamma kunder och f�r kvinnorna �ven o�nskade graviditeter.";
	bakgrundstabeller.damarien[72].intrigerillgarningar=1;
	bakgrundstabeller.damarien[72].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[72].expertispoang=2;
	
	73 
	
	1 slag p� F�rder & �ventyr, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.

	bakgrundstabeller.damarien[73] = {};
	bakgrundstabeller.damarien[73].rubrik="Smugglare";
	bakgrundstabeller.damarien[73].beskrivning="Att frakta varor genom Damarien eller till andra l�nder utan r�tt papper �r en om�jlighet och �ven om man har dessa f�rsvinner mycket av vinsten i tull, mutor och skatter. Smugglaren ser till att frakta varor utan att n�gon f�r reda p� det. En del leder mindre karavaner genom obygden, har dolda utrymmen i sina vagnar och de mest framg�ngsrika hela skepp fyllda med smuggelgods.";
	bakgrundstabeller.damarien[73].farderaventyr=1;
	bakgrundstabeller.damarien[73].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[73].vildmarksfardigheterenheter=4;
	
	74 
	
	1 slag p� Strider & drabbningar, 4 enheter Stridsf�rdigheter, 4 valfria enheter.

	bakgrundstabeller.damarien[74] = {};
	bakgrundstabeller.damarien[74].rubrik="Soldat";
	bakgrundstabeller.damarien[74].beskrivning="Innan Thamas er�vring av Damarien hade varje furstend�me och adelsfamilj sina egna styrkor, men efter att storfursten krossade de flesta av sina fiender har en gemensam arm�, lojal endast till honom, b�rjat byggas upp. Tusentals unga damarier har tagits in till arm�n, ibland frivilligt och ibland med tv�ng, och tr�nas h�rt p� storfurstens slott i Targus och Hammarn�set. En soldats liv �r ofta h�rt och inramat, men m�nga k�nner en starkt samh�righet och lojalitet mot h�rskaren som de i slut�ndan k�nner har givit dem och deras familjer ett b�ttre och tryggare liv.";
	bakgrundstabeller.damarien[74].striderdrabbningar=1;
	bakgrundstabeller.damarien[74].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[74].valfriaenheter=4;
	
	75 
	
	1 slag p� Intriger & illg�rningar, 4 enheter R�relsef�rdigheter, 4 enheter Sociala f�rdigheter.

	bakgrundstabeller.damarien[75] = {};
	bakgrundstabeller.damarien[75].rubrik="Spelare";
	bakgrundstabeller.damarien[75].beskrivning="Spelare finns i alla delar av samh�llet och en del �r inget annat �n smutsiga trashankar som pants�tter sina skor i hoppet om att vinna en handfull mynt. Andra �r rika �dlingar som �ver dyra viner t�mmer familjens skattkistor, spelar bort tillg�ngar, h�star och skepp. F�r en spelare �r det f� saker som inte kan satsas p� ett dj�rvt t�rningskast.";
	bakgrundstabeller.damarien[75].intrigerillgarningar=1;
	bakgrundstabeller.damarien[75].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[75].socialafardigheterenheter=4;
	
	76 
	
	1 slag p� Kunskap & mysterier, 4 enheter Mystikf�rdigheter, 4 valfria enheter.

	
	bakgrundstabeller.damarien[76] = {};
	bakgrundstabeller.damarien[76].rubrik="Spindelsierska";
	bakgrundstabeller.damarien[76].beskrivning="Den urgamla sp�domskonsten att l�sa framtiden i spindlars r�relser �ver magiska tecken kallas \"arachnomanti\" och har ut�vats i Damarien sedan urminnes tider. Konsten har hedniska r�tter och kopplas till Modern Arachna, spindelgudinnan som spinner �dets v�v och anses kommunicera sina �nskningar via sina �ttabenta d�ttrar. Trots Daakkyrkans uttryckliga f�rd�manden bes�ker m�nga damarier, h�g som l�g, ofta i hemlighet spindelsierskorna f�r att f� r�d fr�n den nyckfulla �desgudinnan i livets sv�ra stunder.";
	bakgrundstabeller.damarien[76].kunskapmysterier=1;
	bakgrundstabeller.damarien[76].mystikfardigheterenheter=4;
	bakgrundstabeller.damarien[76].valfriaenheter=4;

	77 
	
	1 slag p� Strider & drabbningar, 4 enheter Sociala f�rdigheter, 4 enheter Stridsf�rdigheter.

	bakgrundstabeller.damarien[77] = {};
	bakgrundstabeller.damarien[77].rubrik="Stadsvakt";
	bakgrundstabeller.damarien[77].beskrivning="Stadsportarna ska vaktas, handelsm�nnens varor ska s�kas igenom, fyllebr�k ska stoppas, det ska h�llas utkik efter eldsv�dor och brottslingar arresteras. Stadsvakten k�nner till varje gr�nd, varje bakgata, kommer ih�g ansiktena p� de vanliga handelsm�nnen och har alltid ett �ga p� dem som tycks sticka ut. En del tar allvarligt p� att h�lla ordning i staden, andra ser det som en god position att ta mutor och �r inte mycket mer �n brottslingar med befogenheter.";
	bakgrundstabeller.damarien[77].striderdrabbningar=1;
	bakgrundstabeller.damarien[77].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[77].stridsfardigheterenheter=4;

	78 
	
	1 slag p� Intriger & illg�rningar, 4 enheter R�relsef�rdigheter, 2 po�ng K�nnetecken.

	bakgrundstabeller.damarien[78] = {};
	bakgrundstabeller.damarien[78].rubrik="Straff�nge";
	bakgrundstabeller.damarien[78].beskrivning="Dessa olyckliga kvinnor och m�n har drabbats av den obarmh�rtiga damariska r�ttvisan men \"ben�dats\" av storfursten och f�tt sina d�dsdomar omvandlade till slaveri och straffarbete. M�nga straff�ngar slutar sina dagar p� n�got av de m�nga stenbrotten eller borgbyggena p� Vakt� eller vid Krylons str�nder, som soldater i straffregementen eller som roddare p� storfurstens gal�rer. Ett f�tal lyckliga slutar som sekreterare eller bokf�rare, men inte ens de undkommer de vanprydande br�nnm�rkningar som i resten av livet visar att de �r brottslingar och slavar under kronan.";
	bakgrundstabeller.damarien[78].intrigerillgarningar=1;
	bakgrundstabeller.damarien[78].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[78].kanneteckenpoang=2;

	79 
	
	1 slag p� F�rder & �ventyr, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.

	bakgrundstabeller.damarien[79] = {};
	bakgrundstabeller.damarien[79].rubrik="Str�tr�vare";
	bakgrundstabeller.damarien[79].beskrivning="Med v�garna tungt trafikerade av resande m�nniskor �r det inte konstigt att vissa valt att tj�na sitt leverne p� att r�na och stj�la fr�n andra. Med utrustning och vapen i varierande kvalitet l�gger de sig i bakh�ll och anfaller n�r offren minst anar det. En del r�varband best�r bara av tv� till tre individer medan andra kan bli upp mot tjugo och trettio. Dessa kan till och med anfalla st�rre m�l s�som en av kronans transporter eller ett f�rn�mt rikemansf�lje med bev�pnad eskort.";
	bakgrundstabeller.damarien[79].farderaventyr=1;
	bakgrundstabeller.damarien[79].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[79].vildmarksfardigheterenheter=4;

	80 
	
	1 slag p� valfri tabell, 4 enheter R�relsef�rdigheter, 2 po�ng Hantverk.

	bakgrundstabeller.damarien[80] = {};
	bakgrundstabeller.damarien[80].rubrik="Tandsmed";
	bakgrundstabeller.damarien[80].beskrivning="Soldater f�r sina t�nder utslagna, �dlingars garnityr drabbas av r�ta efter f�r mycket s�tsaker och kyrkans m�n gnisslar t�nder i s�mnen �ver all synd som beg�s. Tandsmeden �r den som ser �ver detta. De mest v�lb�rgade har mottagningar i de st�rsta st�derna, d�r ers�tter de f�rlorade t�nder med guld eller silver. De fattiga tandsmederna reser mellan byar och drar ut t�nder med grova t�nger.";
	bakgrundstabeller.damarien[80].valfriatabellslag=1;
	bakgrundstabeller.damarien[80].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[80].hantverkpoang=2;

	81 
	
	1 slag p� F�rder & �ventyr, 4 enheter R�relsef�rdigheter, 2 po�ng K�nnetecken.

	bakgrundstabeller.damarien[81] = {};
	bakgrundstabeller.damarien[81].rubrik="Tiggare";
	bakgrundstabeller.damarien[81].beskrivning="Med utstr�ckta h�nder str�cker sig smutsiga, utm�rglade och traskl�dda gestalter mot dem som har pengar och ber om att f� n�gra silver s� de kan f� mat f�r dagen. Har de tur passerar f�rm�gna som delar ut allmosor, andra g�nger jagar stadsvakten bort dem med sparkar och slag. I vissa st�der f�r tiggarna s�rskilda tiggarbrickor som de syr fast p� sina kl�der eller har i ett band runt halsen f�r att visa att de har r�tten att be om allmosor.";
	bakgrundstabeller.damarien[81].farderaventyr=1;
	bakgrundstabeller.damarien[81].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[81].kanneteckenpoang=2;

	bakgrundstabeller.damarien[82] = {};
	bakgrundstabeller.damarien[82].rubrik="Tjuv";
	bakgrundstabeller.damarien[82].rubrik="tjuvar";
	bakgrundstabeller.damarien[82].beskrivning="H�gt ovan hustaken och l�ngt ner i stadens m�rkaste vr�r �r det inte stadsvakten, pr�sterskapet, adeln eller k�pm�nnen som regerar. H�r lever tjuvarna p� att ta fr�n allt och alla som inte h�ller tillr�ckligt god uppsyn �ver sina fickor och hus.";
	bakgrundstabeller.damarien[82].intrigerillgarningar=1;
	bakgrundstabeller.damarien[82].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[82].vildmarksfardigheterenheter=4;

	83 
	
	1 slag p� Intriger & illg�rningar, 4 enheter Kunskapsf�rdigheter, 4 enheter Sociala f�rdigheter.

	bakgrundstabeller.damarien[83] = {};
	bakgrundstabeller.damarien[83].rubrik="Tj�nsteman";
	bakgrundstabeller.damarien[83].beskrivning="Thamas Vitfj�der har sedan sitt trontilltr�de jobbat outtr�ttligt f�r att skapa ett centraliserat rike med enade lagar och en gemensam administration. Den nya tidens grevar, hertigar och godsherrar och andra makthavare �r tj�nstem�n utvalda bara f�r sin kompetens och lojalitet mot storfursten. De �r administrat�rer, bokf�rare och �vervakare av fogdar och l�gre tj�nstem�n. �ven om tj�nstemannatitlar ger stor makt �r det �ven en mycket farlig karri�rv�g, fylld av intriger, d�r man st�ndigt m�ste vara uppm�rksam b�de p� storfurstens fiender och p� konkurrenter som vill r�ja en ur v�gen.";
	bakgrundstabeller.damarien[83].intrigerillgarningar=1;
	bakgrundstabeller.damarien[83].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[83].socialafardigheterenheter=4;

	84 
	
	1 slag p� Intriger & illg�rningar, 4 valfria enheter, 2 po�ng Expertiser.

	bakgrundstabeller.damarien[84] = {};
	bakgrundstabeller.damarien[84].rubrik="Torterare";
	bakgrundstabeller.damarien[84].beskrivning="Damarien �r fyllt av hemligheter som m�ste avsl�jas och personer som m�ste straffas. Torterarens roll �r att bryta s�nder ett m�nskligt psyke och tvinga fram erk�nnanden eller sarga offer till oigenk�nnlighet. I dunkla valv pressas gl�dgade t�nger mot bar hud, lemmar slits ur led och piskor sargar kroppar. Torterare �r vanligen anlitade av arm�n, stadsvakten, brottsorganisationer eller rika sl�kter. De som blir torterare �r oftast kallhamrade individer eller personer som finner en stor njutning i sitt v�rv.";
	bakgrundstabeller.damarien[84].intrigerillgarningar=1;
	bakgrundstabeller.damarien[84].valfriaenheter=4;
	bakgrundstabeller.damarien[84].expertispoang=2;

	bakgrundstabeller.damarien[85] = {};
	bakgrundstabeller.damarien[85].rubrik="Ungtupp";
	bakgrundstabeller.damarien[85].pluralobestamd="ungtuppar";
	bakgrundstabeller.damarien[85].beskrivning="Ivenagallos, Ungtupparna, kallas en grupp av unga, ogifta officerare och adelsm�n (samt enstaka -kvinnor). De tillbringar sin fritid med att spatsera runt i Damariens st�der kl�dda i det senaste modet fr�n Lemira och Consaber och m�ta sin status mot varandra i st�ndiga dueller �ver inbillade och verkliga �rekr�nkningar. �ven om b�de storfursten och kyrkan ser denna livsstil som dekadent och omoralisk uppmuntras den ofta mer eller mindre av �ldre adelsm�n och bef�l, som knappt betraktar ungdomarna som vuxna innan de �dragit sig ett par duell�rr.";
	bakgrundstabeller.damarien[85].intrigerillgarningar=1;
	bakgrundstabeller.damarien[85].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[85].socialafardigheterenheter=4;

	86 

	1 slag p� Strider & drabbningar, 4 enheter Sociala f�rdigheter, 4 enheter Stridsf�rdigheter.

	bakgrundstabeller.damarien[86] = {};
	bakgrundstabeller.damarien[86].rubrik="Upprorsmakare";
	bakgrundstabeller.damarien[86].beskrivning="I m�rka skogar, i borgar h�gt uppe bland bergen, i st�dernas slum och bortom Damariens gr�nser samlas de som �nskar se Thamas Env�ldsh�rskaren och dennes grymma regim st�rtad en g�ng f�r alla. Med alla medel f�rs�ker de v�rva alla fr�n fattiga damariska livegna till utl�ndska furstar i sin kamp mot tyrannen, allt medan de obarmh�rtigt och oupph�rligt jagas av storfurstens lakejer.";
	bakgrundstabeller.damarien[86].striderdrabbningar=1;
	bakgrundstabeller.damarien[86].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[86].stridsfardigheterenheter=4;

	87 
	
	1 slag p� Strider & drabbningar, 4 enheter Stridsf�rdigheter, 2 po�ng Expertiser.

	
	bakgrundstabeller.damarien[87] = {};
	bakgrundstabeller.damarien[87].rubrik="Utkastare";
	bakgrundstabeller.damarien[87].beskrivning="N�r ett fyllebr�k urartar och ett v�nskapligt handgem�ng �verg�r till sparkar och kanske dragna vapen beh�vs det n�gon som kan s�ra p� de inblandade och ge dem alla en kraftig spark mot d�rren. Detta �r utkastarens jobb. Om det inte vore f�r dessa individer skulle m�nga krogar snart vara i spillror.";
	bakgrundstabeller.damarien[87].striderdrabbningar=1;
	bakgrundstabeller.damarien[87].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[87].expertispoang=2;

	88 Utropare
	
	1 slag p� Intriger & illg�rningar, 4 enheter Sociala f�rdigheter, 4 valfria enheter.

	bakgrundstabeller.damarien[88] = {};
	bakgrundstabeller.damarien[88].rubrik="";
	bakgrundstabeller.damarien[88].beskrivning="I de v�ldiga st�derna m�ste nyheter f�rkunnas till folket. D� m�nga inte kan l�sa �r det utroparens roll att meddela inv�narna om makthavarnas beslut. P� torg och vid stadsportar proklamerar de storfurstens nyaste lagar, efterlysta brottslingar, arbeten som utlyses, vad som sker i staden, stundande offentliga avr�ttningar och nyheter fr�n resten av storfurstend�met. Det �r f� som har en s�dan insikt i stadens aff�rer som utroparna.";
	bakgrundstabeller.damarien[88].intrigerillgarningar=1;
	bakgrundstabeller.damarien[88].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[88].valfriaenheter=4;

	89 

	1 slag p� Kunskap & mysterier, 4 enheter Mystikf�rdigheter, 4 enheter Stridsf�rdigheter.

	bakgrundstabeller.damarien[89] = {};
	bakgrundstabeller.damarien[89].rubrik="Vampyrj�gare";
	bakgrundstabeller.damarien[89].beskrivning="F�r utomst�ende �r Damarien k�nt som det m�rka riket d�r lamior en g�ng h�rskade och d�r vand�da varelser alltj�mt vandrar genom natten. S�dana historier �r inte helt tagna ur intet och vissa damarier har tagit p� sig uppdraget att jaga lamior och andra styggelser; de motiveras av s� olika motiv som brinnande tro, h�mnd, kunskapst�rst eller ibland bara f�r sin egen f�rs�rjnings skull. F�r att bek�mpa lamior, demoner och sp�ken har vampyrj�garen ofta djupa kunskaper i f�rbjudna magiska och ockulta konster och det �r inte ovanligt att dessa vagabonder slutar sina ofta korta liv minst lika fruktade som de v�sen de jagar.";
	bakgrundstabeller.damarien[89].kunskapmysterier=1;
	bakgrundstabeller.damarien[89].mystikfardigheterenheter=4;
	bakgrundstabeller.damarien[89].stridsfardigheterenheter=4;

	90 
	
	1 slag p� F�rder & �ventyr, 4 enheter R�relsef�rdigheter, 4 enheter Vildmarksf�rdigheter.

	bakgrundstabeller.damarien[90] = {};
	bakgrundstabeller.damarien[90].rubrik="Vandrare";
	bakgrundstabeller.damarien[90].beskrivning="De flesta damarier ser med misst�nksamhet p� dem som valt att v�nda ryggen till st�dernas eller bondbyarnas relativa trygghet f�r att s�ka sig ut p� v�garna och vildmarken. Oavsett om de �r kringvandrande hantverkare, nomadiska fedaker eller fattiga tiggarmunkar s� har de bes�kt m�nga fler platser och m�tt l�ngt fler m�nniskor �n de allra flesta damarier ens kan f�rest�lla sig.";
	bakgrundstabeller.damarien[90].farderaventyr=1;
	bakgrundstabeller.damarien[90].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[90].vildmarksfardigheterenheter=4;

	91 
	
	1 slag p� Strider & drabbningar, 4 enheter R�relsef�rdigheter, 4 enheter Stridsf�rdigheter.

	bakgrundstabeller.damarien[91] = {};
	bakgrundstabeller.damarien[91].rubrik="Vapenm�stare";
	bakgrundstabeller.damarien[91].beskrivning="Vapenm�starna ser strid som en konstform. De l�r sig invecklade och m�nga g�nger vackra s�tt att k�mpa och f�r m�nga handlar det mer om uppvisning �n om faktisk kamp. En del vapenm�stare tj�nar som instrukt�rer, livvakter eller underh�llare hos de rika och m�ktiga. Andra vandrar mellan byarna och erbjuder sina tj�nster f�r en handfull mynt.";
	bakgrundstabeller.damarien[91].striderdrabbningar=1;
	bakgrundstabeller.damarien[91].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[91].stridsfardigheterenheter=4;

	92 
	
	1 slag p� Strider & drabbningar, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.

	bakgrundstabeller.damarien[92] = {};
	bakgrundstabeller.damarien[92].rubrik="Vargriddare";
	bakgrundstabeller.damarien[92].beskrivning="Vargriddarorden var en g�ng i tiden ett legendariskt s�llskap med uppgiften att skydda Damariens landsbygd mot monster och str�tr�vare. Men efter att de st�llde sig p� fel sida mot storfursten har orden f�rbjudits och drivits i landsflykt till Soldarn och V�stmark. Vargriddarna �r numera en r�relse av Damariska adelsm�n och ofr�lse som svurit att g�ra slut p� Thamas tyranni och �teruppr�tta den damariska adelns makt. Ingen vargriddare kan vara �ppet aktiv inom Damarien, men flera av deras medlemmar och agenter arbetar i hemlighet inom landets gr�nser. Kontakt med dem �r mycket riskabelt, d� storfursten ser dem och alla som samarbetar med dem som farliga hot mot riket.";
	bakgrundstabeller.damarien[92].striderdrabbningar=1;
	bakgrundstabeller.damarien[92].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[92].vildmarksfardigheterenheter=4;

	93 
	
	1 slag p� Strider & drabbningar, 4 enheter Stridsf�rdigheter, 4 enheter Vildmarksf�rdigheter.

	bakgrundstabeller.damarien[93] = {};
	bakgrundstabeller.damarien[93].rubrik="Veteran";
	bakgrundstabeller.damarien[93].beskrivning="Krig sk�rdar sina offer och veteranen har dr�pt fler �n denne kan minnas och f�rlorat m�nga v�nner till vinande pilar och sv�rdshugg. V�ldsamheterna har satt sina sp�r och m�nga veteraner vrider sig i mardr�mmar, h�ller i sig vin f�r att gl�mma eller har �verg�tt till att bli obehagligt avtrubbade. �ven om de krigiska dagarna �r �ver f�r veteranen �r det ack s� l�tt att ta till vapen f�r att tj�na n�gra enkla silver d� den vanliga v�rlden f�r dem blivit fr�mmande och olustig.";
	bakgrundstabeller.damarien[93].striderdrabbningar=1;
	bakgrundstabeller.damarien[93].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[93].vildmarksfardigheterenheter=4;

	bakgrundstabeller.damarien[94] = {};
	bakgrundstabeller.damarien[94].rubrik="Vindmunk";
	bakgrundstabeller.damarien[94].rubrik="vindmunkar";
	bakgrundstabeller.damarien[94].beskrivning="Fr�n sina kloster p� de damariska sl�tterna eller Khazimbergens toppar m�ssar de fem vindarnas tj�nare sina b�ner i jakt p� j�mvikt och insikt i vindarnas natur. Dessa mystiska m�n och kvinnor h�r till en av Damariens m�ktigaste fraktioner och klostret �r en inflytelserik mark�gare och maktfaktor. Detta har givit munkarna flera m�ktiga v�nner, men �nnu fler m�ktiga fiender, bland annat den hedniska Kristallorden.";
	bakgrundstabeller.damarien[94].kunskapmysterier=1;
	bakgrundstabeller.damarien[94].kunskapsfardigheterenheter=4;
	bakgrundstabeller.damarien[94].socialafardigheterenheter=4;

	95 
	
	1 slag p� Intriger & illg�rningar, 4 enheter Sociala f�rdigheter, 2 po�ng Expertiser.

	bakgrundstabeller.damarien[95] = {};
	bakgrundstabeller.damarien[95].rubrik="Vink�nnare";
	bakgrundstabeller.damarien[95].beskrivning="Vink�nnaren �r ansvarig f�r de juridiska dokument som anger vem som f�r j�sa vin, och provsmakar det som ska s�ljas och kontrollerar att det lagras p� korrekt s�tt. De som arbetar med detta �r oftast s� goda vink�nnare att de bara genom att dofta p� vinet kan ber�tta exakt fr�n vilken ving�rd det kommer, vilken druva som anv�nts och vilken �rg�ng det �r.";
	bakgrundstabeller.damarien[95].intrigerillgarningar=1;
	bakgrundstabeller.damarien[95].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[95].expertispoang=2;

	bakgrundstabeller.damarien[96] = {};
	bakgrundstabeller.damarien[96].rubrik="V�gvisare";
	bakgrundstabeller.damarien[96].beskrivning="I b�de stad och vildmark �r det viktigt att hitta r�tt. Handelsresande, pilgrimer och andra resande s�llskap anlitar d�rf�r en v�gvisare f�r att leda dem genom labyrinten av stigar, v�gar, broar, vadst�llen och korsningar. F�rutom den vanliga betalningen i form av silver brukar uppdragsgivaren �ven f� st� f�r mat och dryck f�r v�gvisaren under hela resan.";
	bakgrundstabeller.damarien[96].farderaventyr=1;
	bakgrundstabeller.damarien[96].rorelsefardigheterenheter=4;
	bakgrundstabeller.damarien[96].vildmarksfardigheterenheter=4;

	bakgrundstabeller.damarien[97] = {};
	bakgrundstabeller.damarien[97].rubrik="V�rdshusv�rd";
	bakgrundstabeller.damarien[97].pluralobestamd="v�rdshusv�rdar";
	bakgrundstabeller.damarien[97].beskrivning="Mat serveras, rum st�das, golv sopas, stop diskas, resande kommer och resande ger sig av. En v�rdshusv�rd tr�ffar och pratar med m�nga olika typer av individer och blir snart en person som �r v�lunderr�ttad om vad som h�nder i staden och v�rlden. De mest nedg�ngna v�rdshusen �r inget mer �n r�kiga och pisstinkande gryt d�r �len �r utsp�dd och g�sterna fattiga medan de mest luxu�sa v�rdshusen har en hel stab av tj�nare, otaliga rum, ett stort k�k, en fylld vink�llare och ett gott anseende.";
	bakgrundstabeller.damarien[97].valfriatabellslag=1;
	bakgrundstabeller.damarien[97].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[97].expertispoang=2;

	bakgrundstabeller.damarien[98] = {};
	bakgrundstabeller.damarien[98].rubrik="Xinukultist";
	bakgrundstabeller.damarien[98].beskrivning="De pl�gade skrik som kommer fr�n Xinus anh�ngare �r ett offer till den m�rka guden. I sina privata tortyrkammare dyrkar de sm�rtans och det eviga lidandets furste, den vansinnige Xinu. Under svarta m�ssor n�r dyrkarna extas genom att piska sig och sina anh�ngare till ljudet av psalmerna. F�, om ens n�gon av de invigda kommer n�gonsin kunna �terv�nda till den oskyldiga sinnesro som de en g�ng hade, sedan den sadistiska och f�rbjudna gudomen satt sina klor i deras sj�lar. De anser sig utvalda inf�r den kommande striden och tr�nar f�r att bli Xinus f�rk�mpar.";
	bakgrundstabeller.damarien[98].kunskapmysterier=1;
	bakgrundstabeller.damarien[98].stridsfardigheterenheter=4;
	bakgrundstabeller.damarien[98].expertispoang=2;

	bakgrundstabeller.damarien[99] = {};
	bakgrundstabeller.damarien[99].rubrik="�dling";
	bakgrundstabeller.damarien[99].pluralobestamd="�dlingar";
	bakgrundstabeller.damarien[99].beskrivning="En g�ng i tiden var den damariske aristokraten oinskr�nkt h�rskare �ver sin egen dom�n, d�r den lokale makthavarens vilja bokstavligen var lag och den avl�gsne storfursten bara var en av m�nga m�ktiga adelsm�n. Denna tid �r sedan l�nge f�rbi, och sedan Thamas utrensningar �r st�rre delen av adeln krossad eller hunsad. N�gra adelsm�n �nskar sig tillbaka till den gamla tiden, medan andra �r besatta av att visa sig v�rdiga storfurstens gunst. M�nga adelsm�n �r uppkomlingar som n�tt sin position tack vare Thamas, och de ses p� med intensivt men tyst f�rakt av de gamla sl�kter som alltj�mt kunnat h�lla fast vid sina ur�ldriga titlar och herres�ten.";
	bakgrundstabeller.damarien[99].intrigerillgarningar=2;
	bakgrundstabeller.damarien[99].socialafardigheterenheter=4:
	bakgrundstabeller.damarien[99].valfriaenheter=4;

	bakgrundstabeller.damarien[100] = {};
	bakgrundstabeller.damarien[100].rubrik="�lskare/�lskarinna";
	bakgrundstabeller.damarien[100].bestamd="�lskaren/�lskarinnan";
	bakgrundstabeller.damarien[100].pluralobestamd="�lskare/�lskarinnor";
	bakgrundstabeller.damarien[100].pluralbestamd="�lskarna/�lskarinnorna";
	bakgrundstabeller.damarien[100].beskrivning="Trots kyrkans och moralisters intensiva f�rd�manden �r det mycket vanligt att rika och m�ktiga damarier lever mer eller mindre �ppet tillsammans med en eller flera �lskare eller h�lldamer. En �lskares situation �r ofta riskabel, d� de �r helt beroende av sin partners nycker och kan ofta n�r som helst f�rvisas fr�n dennes hem utan n�gra lagliga konsekvenser, ofta tillsammans med sina o�kta och d�rf�r arvl�sa barn. Trots detta finns det otaliga �lskare och frillor som kunnat f� stort inflytande och makt och slutat sina dagar som respekterade inte bara av sina �lskade, utan �ven av samh�llet i stort.";
	bakgrundstabeller.damarien[100].intrigerillgarningar=1;
	bakgrundstabeller.damarien[100].socialafardigheterenheter=4;
	bakgrundstabeller.damarien[100].expertispoang=2;

	
	
	
	
	handelsetabellista=hamta_handelsetabellista();
	fardighetslistaobjekt=hamta_fardighetslistaobjekt();
	fardighetsgrupplista=fardighetslistaobjekt.fardighetsgrupplista;
	fardighetsgrupplista_plur=fardighetslistaobjekt.fardighetsgrupplista_plur;
	ovrigafardighetergrupplista_namn=fardighetslistaobjekt.ovrigafardighetergrupplista_namn;
	ovrigafardighetergrupplista_plur=fardighetslistaobjekt.ovrigafardighetergrupplista_plur;
	// Nummer
	
	
	for (i=0;i<bakgrundstabeller.lista.length;i++){
		// L�gger till nummer p� bakgrundstabell f�r att senare sparas under rollpersonsobjektet.
		bakgrundstabeller[bakgrundstabeller.lista[i]][0].nummer=i;
	
	
	}
	
	for (m=0; m < bakgrundstabeller.lista.length; m++){
	
    	for (n=1;n < bakgrundstabeller[bakgrundstabeller.lista[m]].length; n++){
			//Tabellnamn
			bakgrundstabeller[bakgrundstabeller.lista[m]][n].tabellnamn=bakgrundstabeller[bakgrundstabeller.lista[m]][0].namn;
			bakgrundstabeller[bakgrundstabeller.lista[m]][n].tabellrubrik=bakgrundstabeller[bakgrundstabeller.lista[m]][0].rubrik;
			// Beskrivninghak
			if ("beskrivninghak" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
				// Skapa inget om det redan finns
			}else{
				bakgrundstabeller[bakgrundstabeller.lista[m]][n].beskrivninghak="";
				for (i=0;i<handelsetabellista.namn.length;i++){
					if (handelsetabellista.namn[i] in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
						bakgrundstabeller[bakgrundstabeller.lista[m]][n].beskrivninghak += "1 slag p� " + handelsetabellista.rubrik[i];
					}
				}
				if ("valfriatabellslag" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].beskrivninghak += "1 slag p� valfri tabell, ";
				}
				
				for (i=0;i<7;i++){ // De sex vanliga kategorierna plus spr�k
					if (fardighetsgrupplista[i] + "enheter" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
						bakgrundstabeller[bakgrundstabeller.lista[m]][n].beskrivninghak += ", 4 enheter " + fardighetsgrupplista_plur[i];
					}
				}
				
				for (i=0;i<ovrigafardighetergrupplista_namn.length;i++){
					if (ovrigafardighetergrupplista_namn[i] + "poang" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
						bakgrundstabeller[bakgrundstabeller.lista[m]][n].beskrivninghak +=", 2 po�ng " + ovrigafardighetergrupplista_plur[i];
					}
				}
				
				bakgrundstabeller[bakgrundstabeller.lista[m]][n].beskrivninghak += ".";
			}
			
			// Plural och best�md form
	
			//bakgrundstabeller[bakgrundstabeller.lista[m]][n].tabellresultat = n;
        	bakgrundstabeller[bakgrundstabeller.lista[m]][n].tabellnamn = bakgrundstabeller.lista[m];  
        	
			if ("obestamd" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
			}else{
				bakgrundstabeller[bakgrundstabeller.lista[m]][n].obestamd=="";
			}
			if ("bestamd" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
			}else{
				bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=="";
			}
			if ("pluralobestamd" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
			}else{
				bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=="";
			}
			if ("pluralbestamd" in bakgrundstabeller[bakgrundstabeller.lista[m]][n]){
			}else{
				bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=="";
			}
			
			// Alla bakgrunder har n-genus om inte annat fastst�lls.
			if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].obestamd==""){
				bakgrundstabeller[bakgrundstabeller.lista[m]][n].obestamd="en " + bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase();
			}
			
			// skapar best�md form med �ndelse -n om det slutar p� a eller e, -en annars
			if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd==""){
				if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-1) == "e"){
					
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "n";
				}else if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-1) == "a"){
					
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "n";
				
				}else if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-2) == "er"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "n";
				
				}else if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-3) == "man"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "nen";
				
				
				}else{
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "en";
				}
			}
			
			
			// skapar obest�md form plural, samma som rubrik om det slutar p� -are eller -ier, med �ndelse -er, -ar eller -or annars.
			
			if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd==""){
				if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-3) == "are"){
					
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase();
				
				}else if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-3) == "ier"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase();
				
				}else if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-3) == "man"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase().slice(0,-2) + "�n";
				
				}else if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-1) == "e"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase().slice(0,-2) + "ar";				
				
				}else if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-1) == "a"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase().slice(0,-2) + "or";
					
				}else{
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase() + "er";
				 
				}
			}
			
			// Skapar best�md form plural
			
			if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralbestamd==""){
				if (bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.slice(-3) == "are"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralbestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd.slice(0,-1) + "na";
				
				}else if(bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd.slice(-3) == "m�n"){
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralbestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd + "nen";
				
				}else{
					bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralbestamd=bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd + "na";
				}
			}
			
			bakgrundstabeller[bakgrundstabeller.lista[m]][n].Bestamd = inledandeversal(bakgrundstabeller[bakgrundstabeller.lista[m]][n].bestamd);
			bakgrundstabeller[bakgrundstabeller.lista[m]][n].Obestamd = inledandeversal(bakgrundstabeller[bakgrundstabeller.lista[m]][n].obestamd);
			bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralBestamd = inledandeversal(bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralbestamd);
			bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralObestamd = inledandeversal(bakgrundstabeller[bakgrundstabeller.lista[m]][n].pluralobestamd);
			bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrikstor = bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik;
			
			bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrikliten = bakgrundstabeller[bakgrundstabeller.lista[m]][n].rubrik.toLowerCase();
			
		}    
	}


	return bakgrundstabeller
}

