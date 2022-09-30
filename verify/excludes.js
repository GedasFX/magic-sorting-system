const excludes = [
  // Items impossible to obtain
  /^air$/,
  /^[a-z]+_air$/,
  /^beetroots$/,
  /^candle_cake$/,
  /^[a-z_]+_candle_cake$/,
  /^[a-z_]+_wall_banner$/,
  /^[a-z_]+_coral_wall_fan$/,
  /^bubble_column$/,
  /^carrots$/,
  /^cave_vines$/,
  /^cocoa$/,
  /^[a-z_]+_wall_sign$/,
  /^[a-z_]+_wall_head$/,
  /^[a-z_]+_wall_skull$/,
  /^[a-z_]*wall_torch$/,
  /^fire$/,
  /^frosted_ice$/,
  /^kelp_plant$/,
  /^lava$/,
  /^[a-z_]+_cauldron$/,
  /^moving_piston$/,
  /^nether_portal$/,
  /^piston_head$/,
  /^potatoes$/,
  /^potted_[a-z_]+$/,
  /^powder_snow$/,
  /^redstone_wire$/,
  /^tall_seagrass$/,
  /^tripwire$/,
  /^[a-z]+_vines_plant$/,
  /^water$/,
  /^melon_stem$/,
  /^attached_melon_stem$/,
  /^pumpkin_stem$/,
  /^attached_pumpkin_stem$/,
  /^big_dripleaf_stem$/,
  /^end_portal$/,
  /^soul_fire$/,

  // Items impossible to obtain in survival
  /^[a-z_]+_spawn_egg$/,
  /^debug_stick$/,
  /^knowledge_book$/,
  /^barrier$/,
  /^end_gateway$/,
  /^end_portal_frame$/,
  /^jigsaw$/,
  /^light$/,
  /^structure_block$/,
  /^structure_void$/,
  /^dirt_path$/,
  /^farmland$/,
  /^infested_\w+$/,
  /^command_block_minecart$/,
  /^bedrock$/,
  /^[a-z_]*command_block$/,
  /^reinforced_deepslate$/,
  /^frogspawn$/,

  // Items that don't really exist in the game
  /^template_[a-z_]+/,
  /^bow_pulling_\d/,
  /^bundle[a-z_]*$/,
  /^generated$/,
  /^handheld$/,
  /^clock_\d+$/,
  /^compass_\d+$/,
  /^recovery_compass_\d+$/,
  /^light_\d+$/,
  /^amethyst_bud$/,
  /^tooting_goat_horn$/,
  /^handheld_rod$/,
  /^fishing_rod_cast$/,
  /^trident_in_hand$/,
  /^spyglass_in_hand$/,
  /^shield_blocking$/,
  /^crossbow_arrow$/,
  /^crossbow_pulling_\d$/,
  /^broken_elytra$/,
  /^crossbow_firework$/,
  /^trident_throwing$/,
];

export default excludes;
