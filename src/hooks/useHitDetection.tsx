import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { state as player } from "../stores/player";
import useGameStore from "../stores/game";
import gameOverAudio from "../assets/audios/gameOver.mp3";

const gameOverSound = new Audio(gameOverAudio);

// export default function useHitDetection(
//   vehicle: React.RefObject<THREE.Group | null>,
//   rowIndex: number
// ) {
//   const endGame = useGameStore((state) => state.endGame);




//   useFrame(() => {

//extra
//      const { status } = useGameStore.getState();

//     // ⛔ Stop collision when game is not running
//     if (status !== "running") return;

//     if (!vehicle.current) return;
//     if (!player.ref) return;
     
//extra
//     // ⛔ Never collide on spawn row
//     if (player.currentRow === 0) return;


//     if (
//       rowIndex === player.currentRow ||
//       rowIndex === player.currentRow + 1 ||
//       rowIndex === player.currentRow - 1
//     ) {
//       const vehicleBoundingBox = new THREE.Box3();
//       vehicleBoundingBox.setFromObject(vehicle.current);

//       const playerBoundingBox = new THREE.Box3();
//       playerBoundingBox.setFromObject(player.ref);

//       if (playerBoundingBox.intersectsBox(vehicleBoundingBox)) {
//         const { status } = useGameStore.getState();

//         if (status === "running") {
//           gameOverSound.currentTime = 0;
//           gameOverSound.play();
//           endGame();
//         }
//       }
//     }
//   });
// }


export default function useHitDetection(
  vehicle: React.RefObject<THREE.Group | null>,
  rowIndex: number
) {
  const endGame = useGameStore((s) => s.endGame);

  useFrame(() => {
    const { status } = useGameStore.getState();

    // ⛔ Stop collision when game is not running
    if (status !== "running") return;

    if (!vehicle.current) return;
    if (!player.ref) return;

    // ⛔ Never collide on spawn row
    if (player.currentRow === 0) return;

    // Only test nearby rows
    if (
      rowIndex !== player.currentRow &&
      rowIndex !== player.currentRow + 1 &&
      rowIndex !== player.currentRow - 1
    ) {
      return;
    }

    const vehicleBox = new THREE.Box3().setFromObject(vehicle.current);
    const playerBox = new THREE.Box3().setFromObject(player.ref);

    if (playerBox.intersectsBox(vehicleBox)) {
      gameOverSound.currentTime = 0;
      gameOverSound.play();
      endGame();
    }
  });
}
