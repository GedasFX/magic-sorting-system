const excludes = [
  // Items impossible to obtain
  /air/,
  /[a-z]+_air/,
  /beetroots/,
  /candle_cake/,
  /[a-z]+_candle_cake/,
  /[a-z]+_wall_banner/,
  /[a-z]+_coral_wall_fan/,
  /bubble_column/,
  /carrots/,
  /cave_vines/,
  /cocoa/,
  /[a-z]+_wall_sign/,
  /[a-z]+_wall_head/,
  /[a-z]+_wall_skull/,
  /[a-z]+_wall_torch/,
  /wall_torch/,
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
  /melon_stem/,
  /attached_melon_stem/,
  /pumpkin_stem/,
  /attached_pumpkin_stem/,
  /big_dripleaf_stem/,

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
  /dirt_path/,
  /farmland/,
  /infested_\w+/,
];

module.exports = excludes;
