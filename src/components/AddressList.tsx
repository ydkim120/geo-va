import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { addressType } from '@/@types'

export function AddressList({
  data
}: {
    data: undefined | addressType[];
}) {
  return (
    <>
      {data && data.length ? (
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">주소주소 테스트!</h4>
          {data.map((item: addressType, idx: number) => (
            <>
              <div key={idx} className="text-sm">
                <span>
                  {item.jibunAddress}
                </span>
                <span>
                  도로명: {item.roadAddress}
                </span>
              </div>
              <Separator className="my-2" />
            </>
          ))}
        </div>
      </ScrollArea>
    ): (
      <div className="guide flex flex-col justify-center gap-[20px]">
        <b className='text-slate-600'>검색결과가 없습니다.<br/>다시 검색해주세요.</b>
        <ol className="flex flex-col gap-[10px] text-slate-500">
          <li>
            * 도로명 + 건물번호
          </li>
          <li>
            * 지역명 + 번지
          </li>
          <li>
            * 건물명, 아파트명
          </li>
        </ol>
      </div>
    )}

    </>
  )


}

AddressList.defaultProps = {
  data: undefined
};

export default AddressList;
