/* ==========================================
   SCENE NAVIGATION
   ========================================== */
function switchScene(activeSceneKey, bgType = 'main') {
  const scenes = [elements.sceneCover, elements.sceneInstructions, elements.sceneMain, elements.sceneOutro];
  scenes.forEach(scene => scene.classList.remove('active'));

  activeSceneKey.classList.add('active');

  if (bgType === 'outro') {
    elements.bgMain.classList.remove('active');
    elements.bgOutro.classList.add('active');
  } else {
    elements.bgOutro.classList.remove('active');
    elements.bgMain.classList.add('active');
  }
}