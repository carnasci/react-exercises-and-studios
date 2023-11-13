export default function Hobbylinks() {
    
    let hobbylinks = [
        "rei.com", 
        "https://mostateparks.com/activity/camping"
    ];

    return (
        <div>
            <a href = {hobbylinks[0]}>REI</a>
            <a href = {hobbylinks[1]}>Missouri State Parks Camping</a>
        </div>
    );
}