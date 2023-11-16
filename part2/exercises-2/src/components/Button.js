import './styles.css';

function Button() {

   onLearnMore = () => {
      return alert("High Tide!");
   }

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;