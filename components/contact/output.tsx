import {useAppSelector} from '../../redux/store';
import {selectName, selectEmail, selectMessage} from '../../redux/slices/formSlice';

interface NumberProps {
    number: number;
}

const Number = ({number}: NumberProps) => {
    return (
        <span className="text-lynch">
            {number}&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
    )
}

const Output = () => {
    const name = useAppSelector(selectName);
    const email = useAppSelector(selectEmail);
    const message = useAppSelector(selectMessage);
    const weekDay = new Date().toLocaleDateString('en-US', {weekday: 'short'});
    const monthDay = new Date();
    const month = monthDay.toLocaleDateString('en-US', {month: 'short'});
    const date = weekDay + ' ' + monthDay.getDate() + ' ' + month;

    return (
        <div className="flex w-full break-words">
            <ul className="flex flex-col ml-5 space-y-2">
                <li className="text-lynch">
                    <Number number={1}/>
                    <span className="text-[#C98BDF]">const </span>
                    <span className="text-[#5565E8]">button </span>
                    <span className="text-[#C98BDF]">= </span>
                    <span className="text-[#5565E8]">document</span>
                    <span className="text-[##607B96]">.</span>
                    <span className="text-[#5565E8]">querySelector</span>
                    <span className="text-[#607B96]">(</span>
                    <span className="text-[#FEA55F]">&#39;#sendBtn&#39;</span>
                    <span className="text-[#607B96]">)</span>
                    <span className="text-[#607B96]">;</span>
                </li>
                <li>
                    <Number number={2}/>
                </li>
                <li>
                    <Number number={3}/>
                    <span className="text-[#C98BDF]">const </span>
                    <span className="text-[#5565E8]">message </span>
                    <span className="text-[#C98BDF]">= </span>
                    <span className="text-[#607B96]">&#123;</span>
                </li>
                <li>
                    <Number number={4}/>
                    <span className="text-[#5565E8] pl-5">name</span>
                    <span className="text-[#607B96]">: </span>
                    <span className="text-[#FEA55F]">"{name}"<span className="text-[#607B96]">,</span></span>
                </li>
                <li>
                    <Number number={5}/>
                    <span className="text-[#5565E8] pl-5">email</span>
                    <span className="text-[#607B96]">: </span>
                    <span className="text-[#FEA55F]">"{email}"<span className="text-[#607B96]">,</span></span>
                </li>
                <li>
                    <Number number={6}/>
                    <span className="text-[#5565E8] pl-5">message</span>
                    <span className="text-[#607B96]">: </span>
                    <span className="text-[#FEA55F]">"{message}"<span className="text-[#607B96]">,</span></span>
                </li>
                <li>
                    <Number number={7}/>
                    <span className="text-[#607B96] pl-5">date</span>
                    <span className="text-[#607B96]">: </span>
                    <span className="text-[#FEA55F]">"{date}"<span className="text-[#607B96]">,</span></span>
                </li>
                <li>
                    <Number number={8}/>
                    <span className="text-[#607B96]">&#125;</span>
                </li>
                <li>
                    <Number number={9}/>
                </li>
                <li>
                    <Number number={10}/>
                    <span className="text-[#5565E8]">button</span>
                    <span className="text-[#607B96]">.</span>
                    <span className="text-[#5565E8]">addEventListener</span>
                    <span className="text-[#607B96]">(</span>
                    <span className="text-[#FEA55F]">&#39;click&#39;</span>
                    <span className="text-[#607B96]">&#44; () </span>
                    <span className="text-[#C98BDF]">&#61;&#62; </span>
                    <span className="text-[#607B96]">&#123;</span>
                </li>
                <li>
                    <Number number={11}/>
                    <span className="text-[#5565E8] pl-5">form</span>
                    <span className="text-[#607B96]">.</span>
                    <span className="text-[#5565E8]">send</span>
                    <span className="text-[#607B96]">(</span>
                    <span className="text-[#5565E8]">message</span>
                    <span className="text-[#607B96]">);</span>
                </li>
                <li>
                    <Number number={12}/>
                    <span className="text-[#607B96]">&#125;)</span>
                </li>
            </ul>
        </div>
    );
};

export default Output;
