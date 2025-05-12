

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'home';

          let args: any = [];

          const screens = [
            

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"home",

          styles:[`{
  flex: 1,
alignItems: "center",
}`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ height: "10px"}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: "row",
  backgroundColor: "transparent",
  alignItems: "center",
  width: "100%",
}
`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flex: 1,
  alignItems: "center",
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
   width: "270px",
   height: "152px",
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FGTA%20VI%20Logo.png?alt=media&token=c74d76cb-f7fe-4aa9-b5c5-4da9e20065f5`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  width: 30,
  height: 30,
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "10px",
  right: "10px",
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#0F1729"/>
</svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: -1,
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FbgGTA6.png?alt=media&token=c638dcff-2462-466b-a4c3-c728a607323b`],

      args,
    }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  textAlign: "center",
  fontSize: "20px",
 }`
          ],

          children: [
            `ALMOST THERE`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#000",
  textAlign: "center",
  fontSize: "22px",
}`
          ],

          children: [
            `ALMOST THERE`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  textAlign: "center",
  fontSize: "12px",
}`
          ],

          children: [
            `The game of the decade has finally arrived`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  textAlign: "center",
  fontSize: "12px",
}`
          ],

          children: [
            `Available on Xbox Series X and Playstation 5`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ height: "10px"}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        () => {
	const targetDate = '2025-12-31T23:59:59';
	const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: '00', minutes: '00', seconds: '00' });

	const style_1 = { alignItems: 'center', justifyContent: 'center' };
	const style_days = { fontSize: 48, fontWeight: 'bold', color: '#fff' };
	const style_time = { fontSize: 32, color: '#fff' };

	const formatTime = (time) => { 
		const days = Math.floor(time / (3600 * 24)); 
		const hours = String(Math.floor((time % (3600 * 24)) / 3600)).padStart(2, '0'); 
		const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0'); 
		const seconds = String(time % 60).padStart(2, '0'); 

		return { days, hours, minutes, seconds }; 
	};

	React.useEffect(() => { 
		const countdown = () => { 
		const now = new Date().getTime(); 
		const target = new Date(targetDate).getTime(); 
		if (isNaN(target)) { 
			setTimeLeft({ days: 0, hours: '00', minutes: '00', seconds: '00' }); 
			return; 
	} 
		const distance = target - now; if (distance <= 0) { setTimeLeft({ days: 0, hours: '00', minutes: '00', seconds: '00' }); return; } 
		const timeInSeconds = Math.floor(distance / 1000); 
		const { days, hours, minutes, seconds } = formatTime(timeInSeconds); setTimeLeft({ days, hours, minutes, seconds }); }; 
		const intervalId = setInterval(countdown, 1000); return () => clearInterval(intervalId); 
	}, [targetDate]);

	return (
		<RN.View style={style_1}>
			<RN.Text style={style_days}>{timeLeft.days} DAYS</RN.Text>
			<RN.Text style={style_time}>{timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds} LEFT</RN.Text>
		</RN.View>
	);
}, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ height: "10px"}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: "row",
  backgroundColor: "transparent",
  alignItems: "center",
  justifyContent: "center",
  width: "300px",
  height: "100px",
  borderRadius: 5,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("otherPage");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
  width: "200px",
  height: "50px",
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FGTAbtnPreOrder.png?alt=media&token=5b9f5b72-aa71-48d2-83e3-074441571300`],

      args,
    }}/>],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>
          ];

          const initCt = () => (
 {
 'all': { 
'colors': { 
'primary': "#fff", 'secondary': "red" } 
, 
'cond1': false, 
'func1': (nativeEvent)=>console.log(nativeEvent), 
'Comp1': <RN.Text style={{color: "darkred"}}>---</RN.Text>, 
'lists': { 
'lt1': [{name: "João", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name: "Luciana"},{name: "Pedro"}], 
'lst2': [{name: "Tarefa 1", date: "21/03/25"},{name: "Tarefa 2", date: "21/03/25"},{name: "Tarefa 3", date: "24/03/25"}], 'lst3': [{name: "Task 1"},{name: "Task 2"}] } 
, 
'name': "Name:", 'dataToSet': {name: "Carlos", phone: "1111"} } 
 
} 
 );
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            ()=>{}
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        
