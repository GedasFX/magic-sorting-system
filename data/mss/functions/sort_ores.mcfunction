execute as @s if entity @e[type=minecraft:item_frame,nbt={Item:{id:"minecraft:raw_iron"}},distance=0..128] run teleport @s @e[limit=1,sort=random,type=minecraft:item_frame,nbt={Item:{id:"minecraft:raw_iron"}},distance=0..128]
execute as @s unless entity @e[type=minecraft:item_frame,nbt={Item:{id:"minecraft:raw_iron"}},distance=0..128] run function mss:sort_misc
