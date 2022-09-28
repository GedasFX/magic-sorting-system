const excludes = [
  // Items impossible to obtain
  /air/,
  /[a-z]+_air/,
  /[a-z_]+_stem/,
  /beetroots/,
  /candle_cake/,
  /[a-z]+_candle_cake/,
  /[a-z]+_wall_banner/,
  /[a-z]+_coral_wall_fan/,
  /bubble_column/,
  /carrots/,
  /cave_vines/,
  /cave_vines_plant/,
  /cocoa/,
  /[a-z]+_wall_[a-z]+/,
  /fire/,
  /frosted_ice/,
  /kelp_plant/,
  /lava/,
  /[a-z_]+_cauldron/,
  /moving_piston/,
  /nether_portal/,
  /piston_head/,
  /potatoes/,
  /potted_[a-z_]+/,
  /powder_snow/,
  /redstone_wire/,
  /tall_seagrass/,
  /tripwire/,
  /[a-z]+_vines_plant/,
  /water/,
  /wall_torch/,

  // Items impossible to obtain in survival
  /[a-z_]+_spawn_egg/,
  /debug_stick/,
  /knowledge_book/,
  /barrier/,
  /end_gateway/,
  /end_portal/,
  /jigsaw/,
  /light/,
  /structure_block/,
  /structure_void/,
  /bundle/,

  // Items covered with the use of tags
  /music_disc_\w+/
];

module.exports = excludes;
