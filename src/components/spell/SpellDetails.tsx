import { ISpellDetails } from '../../types/spell'
import DurationIcon from '../common/icons/DurationIcon'
import LevelIcon from '../common/icons/LevelIcon'
import RangeIcon from '../common/icons/RangeIcons'

const SpellDetails = ({
    casting_time,
    classes,
    desc,
    duration,
    higher_level,
    level,
    material,
    name,
    range,
    school,
    subclasses,
}: ISpellDetails) => {
    return (
        <div>
            <div className="w-full  bg-secondary-50 px-3 py-6">
                <div>
                    <div className="text-xl font-bold text-primary-700 text-center mb-2">
                        {name}
                    </div>
                    <p className="text-sm text-secondary-500">{desc}</p>
                </div>
            </div>
            <div className="p-3">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="text-sm text-secondary-500 font-semibold min-w-32">
                            Higher Level:
                        </div>
                        <div className="text-sm text-secondary-500">
                            {higher_level?.[0]}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-sm text-secondary-500 font-semibold min-w-32">
                            Components:
                        </div>
                        <div className="text-sm text-secondary-500">
                            Lorem ipsum, dolor
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-sm text-secondary-500 font-semibold min-w-32">
                            Materials:
                        </div>
                        <div className="text-sm text-secondary-500">
                            {material}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-sm text-secondary-500 font-semibold min-w-32">
                            Casting Time:
                        </div>
                        <div className="text-sm text-secondary-500">
                            {casting_time}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-sm text-secondary-500 font-semibold min-w-32">
                            Classes :
                        </div>
                        <div className="flex items-center gap-3 flex-wrap">
                            {classes?.map((cls, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl py-1 px-2 border text-xs text-secondary-500"
                                >
                                    {cls.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-sm text-secondary-500 font-semibold min-w-32">
                            Sub Classes :
                        </div>
                        <div className="flex items-center gap-3 flex-wrap">
                            {subclasses?.map((sub, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl py-1 px-2 border text-xs text-secondary-500"
                                >
                                    {sub.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-sm text-secondary-500 font-semibold min-w-32">
                            School:
                        </div>
                        <div className="text-sm text-secondary-500">
                            {school?.name}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-sm text-secondary-500 font-semibold min-w-32">
                            Range:
                        </div>
                        <div>
                            <RangeIcon color="red" height={20} width={20} />
                        </div>
                        <div className="text-sm text-secondary-500">
                            {range}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-sm text-secondary-500 font-semibold min-w-32">
                            Duration:
                        </div>
                        <div>
                            <DurationIcon color="red" height={20} width={20} />
                        </div>
                        <div className="text-sm text-secondary-500">
                            {duration}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-sm text-secondary-500 font-semibold min-w-32">
                            Level:
                        </div>
                        <div>
                            <LevelIcon color="red" height={20} width={20} />
                        </div>
                        <div className="text-sm text-secondary-500">
                            {level}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpellDetails
